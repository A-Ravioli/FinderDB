from flask import Flask
from flask_sqlalchemy import SQLAlchemy as SQL

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///finderdb.sqlite3'  # our database connection string
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQL(app)

# Import routes after initializing db to avoid circular imports
from . import routes

# Initialize the database
@app.before_first_request
def create_tables():
    db.create_all()

