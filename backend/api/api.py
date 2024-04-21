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

# Get all requests
@app.route("/api/all-requests", methods=["GET"])
def all_requests():
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM LostRequest LEFT OUTER JOIN Employee ON LostRequest.Requester_ID = Employee.Employee_ID"
    )
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))


# Get items `claimed` by employee 002828141
@app.route("/api/claimed-items", methods=["GET"])
def claimed_items():
    query = request.args.to_dict()
    cur = mysql.connection.cursor()
    emp_id = query.get("employeeId")
    cur.execute("""SELECT * FROM Item WHERE ClaimsE_ID = %s""", (emp_id,))
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
    id = uuid.uuid4()
    item_name = query.get("name")
    date_found = query.get("dateFound")
    desc = query.get("description")
    location = query.get("location")
    image = query.get("image")

    cur = mysql.connection.cursor()
    cur.execute(
        """INSERT INTO Item (ItemID, ItemName, Status, Image, Description, DateFound, Location, PostE_ID) VALUES (%s, %s, %s, %s, %s, %s, %s, %s);""",
        (id, item_name, "Unclaimed", image, desc, date_found, location, "002828141"),
    )
    mysql.connection.commit()
    cur.close()
    return jsonify(id)


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


# Request lost item
@app.route("/api/request-lost-item", methods=["POST"])
def request_lost_item():
    cur = mysql.connection.cursor()
    query = request.args.to_dict()
    req_id = query.get("requesterID")
    item_name = query.get("itemName")
    desc = query.get("description")
    date_lost = query.get("dateLost")
    location = query.get("location")

    cur.execute(
        "INSERT INTO LostRequest (Requester_ID, ItemName, Description, DateLost, Location, Status) VALUES (%s, %s, %s, %s, %s, %s)",
        (
            req_id,
            item_name,
            desc,
            date_lost,
            location,
            "Unfulfilled",
        ),
    )
    mysql.connection.commit()
    cur.close()
    return jsonify("Success", 200)


# Searches the database for an item with title or description containing the query
@app.route("/api/search", methods=["GET"])
def search():
    query = request.args.to_dict()
    search_query = query.get("query")
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM Item LEFT OUTER JOIN Employee ON Item.ClaimsE_ID = Employee.Employee_ID WHERE ItemName LIKE %s OR Description LIKE %s",
        ("%" + search_query + "%", "%" + search_query + "%"),
    )
    columns = [desc[0] for desc in cur.description]
    result = cur.fetchall()
    cur.close()
    return jsonify(tuple_to_dict(columns, result))


@app.route("/api/delete-item", methods=["DELETE"])
def delete_item():
    query = request.args.to_dict()
    item_id = query.get("itemId")
    cur = mysql.connection.cursor()
    cur.execute(
        "DELETE FROM Item WHERE Item.ItemID = %s", (item_id,)
    )
    mysql.connection.commit()
    cur.close()
    return jsonify("Success", 200)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
