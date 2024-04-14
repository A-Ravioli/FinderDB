from flask import Flask, jsonify
from flask_mysqldb import MySQL


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'db'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'FinderDB'

mysql = MySQL(app)

@app.route('/api/test')
def hello_world():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM Employee')
    result = cur.fetchone()
    cur.close()
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)