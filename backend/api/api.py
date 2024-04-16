from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
import json

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'db'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'FinderDB'

mysql = MySQL(app)

# Helper function to convert tuple results to dictionaries
def tuple_to_dict(columns, data):
    result = []
    for item in data:
        result.append(dict(zip(columns, item)))
    for item in result:
        for key in list(item.keys()):
            item[key.lower()] = item.pop(key)
    return result

# Get all items
@app.route('/api/all-items', methods=['GET'])
def all_items():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM Item')
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))

# Check if employee exists
@app.route('/api/employee-exists/<emp_id>', methods=['GET'])
def employee_exists(emp_id):
    cur = mysql.connection.cursor()
    cur.execute('SELECT EXISTS(SELECT * FROM Employee WHERE Employee_ID = %s);', emp_id)
    result = cur.fetchone()[0]
    cur.close()
    return json.dumps(result == 1)

# Updates item status and id of employee who claimed it
@app.route('/api/claim-item', methods=['PATCH'])
def claim_item():
    query = request.args.to_dict()
    emp_id = query.get("employeeId")
    item_id = query.get("itemId")
    cur = mysql.connection.cursor()
    cur.execute("""UPDATE Item SET ClaimsE_ID = %s, Status = "Claimed" WHERE ItemID = %s;""", (emp_id, item_id))
    cur.close()
    mysql.connection.commit()
    return f"""UPDATE Item SET ClaimsE_ID = {emp_id}, Status = "Claimed" WHERE ItemID = {item_id};"""

# Get item by id
@app.route('/api/item/<int:id>', methods=['GET'])
def get_item(id):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM Item WHERE id = %s', (id,))
    columns = [desc[0] for desc in cur.description]
    item = cur.fetchone()
    cur.close()
    return jsonify(dict(zip(columns, item))) if item else ('Item not found', 404)

# Add a new item
@app.route('/api/items', methods=['POST'])
def add_item():
    data = request.get_json()
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO Item (name, description, location, image) VALUES (%s, %s, %s, %s)',
                (data['name'], data['description'], data['location'], data['image']))
    mysql.connection.commit()
    cur.close()
    return ('Item added', 201)

# Update an item
@app.route('/api/items/<int:id>', methods=['PUT'])
def update_item(id):
    data = request.get_json()
    cur = mysql.connection.cursor()
    cur.execute('UPDATE Item SET name=%s, description=%s, location=%s, image=%s WHERE id=%s',
                (data['name'], data['description'], data['location'], data['image'], id))
    mysql.connection.commit()
    cur.close()
    return ('Item updated', 200)

# Delete an item
@app.route('/api/items/<int:id>', methods=['DELETE'])
def delete_item(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM Item WHERE id = %s', (id,))
    mysql.connection.commit()
    cur.close()
    return ('Item deleted', 200)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)