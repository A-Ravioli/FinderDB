import mysql.connector


connection = mysql.connector.connect(
    user='root', password='root', host='mysql', port="3306", database='db')
print("DB connected")


