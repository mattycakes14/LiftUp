from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy  # Ensure this import is present
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # Database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking

db = SQLAlchemy(app)  # This should work now
CORS(app)  # Enable CORS for the app

# Database models
class Event(db.Model):
    event_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    flyer = db.Column(db.String(200), nullable=True)
    date = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    host = db.Column(db.Integer, nullable=False)  # Removed foreign key constraint for simplicity

    def __init__(self, name, flyer, date, location, description, host):
        self.name = name
        self.flyer = flyer
        self.date = date
        self.location = location
        self.description = description
        self.host = host

# Create event route
@app.route('/events', methods=['POST'])
def create_event():
    data = request.json  # Get data from frontend
    
    # Validate the required fields
    required_fields = ['name', 'date', 'location', 'description', 'host']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 400

    # Extract data from request
    event_name = data['name']
    date = data['date']
    location = data['location']
    description = data['description']
    host = data['host']

    # Create new event object
    event = Event(
        name=event_name,
        flyer='',  # Empty flyer field (as it's no longer needed)
        date=date,
        location=location,
        description=description,
        host=host
    )

    # Add event to the database
    db.session.add(event)
    db.session.commit()

    # Return a success response
    return jsonify({
        'message': 'Event created successfully',
        'event': {
            'event_id': event.event_id,
            'name': event.name,
            'date': event.date,
            'location': event.location
        }
    }), 201


# Get all events route
@app.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()  # Retrieve all events from the database
    events_list = [{
        'event_id': event.event_id,
        'name': event.name,
        'date': event.date,
        'location': event.location,
        'description': event.description,
        'host': event.host
    } for event in events]
    return jsonify(events_list), 200  # Return the list of events as JSON




if __name__ == '__main__':
    # Initialize the database
    with app.app_context():
        db.create_all()  # Create all tables defined in the models
    app.run(host='0.0.0.0', port=5000, debug=True)
