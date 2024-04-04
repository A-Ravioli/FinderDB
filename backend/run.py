from app import app, db
from app.models import *  # Ensure this imports SQLAlchemy models to initialize them

if __name__ == "__main__":
    db.create_all()  # Create database tables for all models
    app.run(debug=True)  # Turn off debug mode in production
