import sqlite3
from objects import User, Event

# Connect to the SQLite database
conn = sqlite3.connect('liftup.db')
c = conn.cursor()

# Create User table
c.execute('''
CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)
''')

# Create Event table
c.execute('''
CREATE TABLE IF NOT EXISTS Event (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES User (id)
)
''')

# Function to add a user
def add_user(user):
    with conn:
        c.execute("INSERT INTO User (name, email) VALUES (?, ?)", (user.name, user.email))

# Function to add an event
def add_event(event):
    with conn:
        c.execute("INSERT INTO Event (name, date, user_id) VALUES (?, ?, ?)", (event.name, event.date, event.user_id))

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
        print(f"ID: {user[0]}, Name: {user[1]}, Email: {user[2]}")

# Function to print all events
def print_events():
    events = get_events()
    for event in events:
        print(f"ID: {event[0]}, Name: {event[1]}, Date: {event[2]}, User ID: {event[3]}")

# Example usage
if __name__ == "__main__":
    print("Users:")
    print_users()
    print("\nEvents:")
    print_events()
    close_connection()