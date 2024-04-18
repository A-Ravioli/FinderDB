from flask import Flask, jsonify, request, Response
from flask_mysqldb import MySQL
import uuid

app = Flask(__name__)
app.config["MYSQL_HOST"] = "db"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "root"
app.config["MYSQL_DB"] = "FinderDB"

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
@app.route("/api/all-items", methods=["GET"])
def all_items():
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM Item LEFT OUTER JOIN Employee ON Item.ClaimsE_ID = Employee.Employee_ID"
    )
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))


# Get items claimed by employee 002828141
@app.route("/api/claimed-items", methods=["GET"])
def claimed_items():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT * FROM Item WHERE ClaimsE_ID = 002828141""")
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))


# Get employee based on ID
@app.route("/api/get-employee", methods=["GET"])
def get_employee():
    query = request.args.to_dict()
    emp_id = query.get("employeeId")
    cur = mysql.connection.cursor()
    cur.execute("""SELECT * FROM Employee WHERE Employee_ID = %s;""", (emp_id,))
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))


# Report a found item. Returns the item's uuid
@app.route("/api/report-found-item", methods=["POST"])
def report_found_item():
    query = request.args.to_dict()
    item_name = query.get("name")
    date_found = query.get("dateFound")
    emp_id = query.get("employeeId")
    desc = query.get("description")
    location = query.get("location")

    cur = mysql.connection.cursor()
    cur.execute(
        """INSERT INTO Item (ItemName, Status, Description, DateFound, Location, PostE_ID) VALUES (%s, %s, %s, %s, %s, %s, %s);""",
        (item_name, "Claimed", desc, date_found, location, emp_id),
    )
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))


# Updates item status and id of employee who claimed it
@app.route("/api/claim-item", methods=["PATCH"])
def claim_item():
    query = request.args.to_dict()
    emp_id = query.get("employeeId")
    item_id = query.get("itemId")
    cur = mysql.connection.cursor()
    cur.execute(
        """UPDATE Item SET ClaimsE_ID = %s, Status = "Claimed" WHERE ItemID = %s;""",
        (emp_id, item_id),
    )
    cur.close()
    mysql.connection.commit()
    return ("Item updated", 200)


# Add a new item
@app.route("/api/items", methods=["POST"])
def add_item():
    data = request.get_json()
    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO Item (name, description, location, image) VALUES (%s, %s, %s, %s)",
        (data["name"], data["description"], data["location"], data["image"]),
    )
    mysql.connection.commit()
    cur.close()
    return ("Item added", 201)


# Update an item
@app.route("/api/items/<int:id>", methods=["PUT"])
def update_item(id):
    data = request.get_json()
    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Item SET name=%s, description=%s, location=%s, image=%s WHERE id=%s",
        (data["name"], data["description"], data["location"], data["image"], id),
    )
    mysql.connection.commit()
    cur.close()
    return ("Item updated", 200)


# Delete an item
@app.route("/api/items/<int:id>", methods=["DELETE"])
def delete_item(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Item WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return ("Item deleted", 200)


# Request lost item
@app.route("/api/request-lost-item", methods=["POST"])
def request_lost_item():
    cur = mysql.connection.cursor()
    data = request.get_json()
    cur.execute(
        "INSERT INTO LostRequest (Requester_ID, ItemName, Description, DateLost, Location, Status) VALUES (%s, %s, %s, %s, %s, %s)",
        (
            data["RequesterID"],
            data["ItemName"],
            data["Description"],
            data["DateLost"],
            data["Location"],
            data["Status"],
        ),
    )
    mysql.connection.commit()
    cur.close()
    return jsonify("asdf")


# Report a found item. Returns the item's uuid
@app.route("/api/report-found-item", methods=["POST"])
def report_found_item():
    query = request.args.to_dict()
    item_name = query.get("name")
    date_found = query.get("dateFound")
    emp_id = query.get("employeeId")
    desc = query.get("description")
    location = query.get("location")

    cur = mysql.connection.cursor()
    cur.execute(
        """INSERT INTO Item (ItemName, Status, Description, DateFound, Location, PostE_ID) VALUES (%s, %s, %s, %s, %s, %s, %s);""",
        (item_name, "Claimed", desc, date_found, location, emp_id),
    )
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)


# SELECT * FROM Item
# WHERE ItemName LIKE '%Search%'
# ORDER BY ItemName ASC;
