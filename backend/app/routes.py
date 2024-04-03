from flask import request, jsonify
from . import app, db
from .models import Item

@app.route('/items', methods=['GET', 'POST'])
def handle_items():
    if request.method == 'GET':
        items = Item.query.all()
        return jsonify([item.to_dict() for item in items])
    elif request.method == 'POST':
        # Implement logic to add a new item
        pass

# Implement other routes from the doc we created
