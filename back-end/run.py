from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import bcrypt  # Import bcrypt for password hashing

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # Database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking

db = SQLAlchemy(app)
CORS(app)  # Enable CORS for the app

# Database models
class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    events_attending = db.Column(db.Text, default='[]')  # JSON string for events attending
    events_volunteering = db.Column(db.Text, default='[]')  # JSON string for events volunteering

    def __init__(self, username, email, password, events_attending=None, events_volunteering=None):
        if events_attending is None:
            events_attending = '[]'
        if events_volunteering is None:
            events_volunteering = '[]'
        
        self.username = username
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())  # Hash the password
        self.events_attending = events_attending
        self.events_volunteering = events_volunteering

class Event(db.Model):
    event_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    flyer = db.Column(db.String(200), nullable=True)
    date = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    host = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    attendees = db.Column(db.Text, default='[]')  # JSON string for attendees
    volunteers = db.Column(db.Text, default='[]')  # JSON string for volunteers

    def __init__(self, name, flyer, date, location, description, host, attendees=None, volunteers=None):
        if attendees is None:
            attendees = '[]'
        if volunteers is None:
            volunteers = '[]'
        
        self.name = name
        self.flyer = flyer
        self.date = date
        self.location = location
        self.description = description
        self.host = host
        self.attendees = attendees
        self.volunteers = volunteers

# Home route
@app.route('/')
def home():
    return "Welcome to the Flask App!"

# Create user route
@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    user = User(
        username=data['username'],
        email=data['email'],
        password=data['password'],  # Password will be hashed inside the constructor
        events_attending=data.get('events_attending', '[]'),
        events_volunteering=data.get('events_volunteering', '[]')
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created', 'user': {
        'user_id': user.user_id,
        'username': user.username,
        'email': user.email
    }}), 201

# Create event route
@app.route('/events', methods=['POST'])
def create_event():
    data = request.json
    event = Event(
        name=data['name'],
        flyer=data.get('flyer', ''),
        date=data['date'],
        location=data['location'],
        description=data['description'],
        host=data['host'],
        attendees=data.get('attendees', '[]'),
        volunteers=data.get('volunteers', '[]')
    )
    db.session.add(event)
    db.session.commit()
    return jsonify({'message': 'Event created', 'event': {
        'event_id': event.event_id,
        'name': event.name,
        'date': event.date,
        'location': event.location
    }}), 201

# Get all users route
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [{
        'user_id': user.user_id,
        'username': user.username,
        'email': user.email,
        'events_attending': user.events_attending,
        'events_volunteering': user.events_volunteering
    } for user in users]
    return jsonify(users_list), 200

# Get all events route
@app.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    events_list = [{
        'event_id': event.event_id,
        'name': event.name,
        'date': event.date,
        'location': event.location,
        'description': event.description,
        'host': event.host,
        'attendees': event.attendees,
        'volunteers': event.volunteers
    } for event in events]
    return jsonify(events_list), 200

# Add fake data during initialization
@app.before_first_request
def add_fake_data():
    # Add some fake users if the table is empty
    if User.query.count() == 0:
        user1 = User(username='john_doe', email='john.doe@example.com', password='password123')
        user2 = User(username='jane_doe', email='jane.doe@example.com', password='password123')
        user3 = User(username='alice_smith', email='alice.smith@example.com', password='password123')
        
        db.session.add(user1)
        db.session.add(user2)
        db.session.add(user3)
        db.session.commit()

    # Add some fake events if the table is empty
    if Event.query.count() == 0:
        event1 = Event(name='Community Meetup', flyer='', date='2025-02-10', location='City Hall', description='A meetup for community members.', host=1)
        event2 = Event(name='Tech Conference', flyer='', date='2025-03-05', location='Tech Center', description='A tech conference.', host=2)
        event3 = Event(name='Cooking Workshop', flyer='', date='2025-04-01', location='Community Center', description='Cooking class for beginners.', host=3)

        db.session.add(event1)
        db.session.add(event2)
        db.session.add(event3)
        db.session.commit()

if __name__ == '__main__':
    # Use app context to initialize the database
    with app.app_context():
        db.create_all()  # Create all tables defined in the models
    app.run(host='0.0.0.0', port=5000, debug=True)
