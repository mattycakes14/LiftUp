import sqlite3
from objects import User, Event

# Connect to the SQLite database
conn = sqlite3.connect('liftup.db')
c = conn.cursor()

# Drop existing tables if they exist
c.execute('DROP TABLE IF EXISTS User')
c.execute('DROP TABLE IF EXISTS Event')


# Create User table
c.execute('''
CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
''')

# Create Event table
c.execute('''
CREATE TABLE IF NOT EXISTS Event (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    location TEXT NOT NULL
)
''')

# Function to add a user
def add_user(user):
    with conn:
        c.execute("INSERT INTO User (username, email, password) VALUES (?, ?, ?)", (user._username, user._email, user._password))

# Function to add an event
def add_event(event):
    with conn:
        c.execute("INSERT INTO Event (name, date, location) VALUES (?, ?, ?)", (event._name, event._date, event._location))

# Function to get all users
def get_users():
    c.execute("SELECT * FROM User")
    return c.fetchall()

# Function to get all events
def get_events():
    c.execute("SELECT * FROM Event")
    return c.fetchall()

# Close the connection
def close_connection():
    conn.close()

# Function to print all users
def print_users():
    users = get_users()
    for user in users:
        print(f"ID: {user[0]}, Name: {user[1]}, Email: {user[2]}, Password: {user[3]}")

# Function to print all events
def print_events():
    events = get_events()
    for event in events:
        print(f"ID: {event[0]}, Name: {event[1]}, Date: {event[2]}, Location: {event[3]}")

# Example usage
if __name__ == "__main__":
    print("Users:")
    John = User(1, 'johnny', 'john@gmail.com', 'password')
    add_user(John)
    print_users()
    print("\nEvents:")
    fire_awareness = Event(1, "Fire Awareness", 'flyer.jpg', "2021-10-10", 'LA', 'Help stop the fire!', [John])
    add_event(fire_awareness)
    print_events()
    close_connection()
