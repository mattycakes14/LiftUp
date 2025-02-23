# Has code for the User and Event classes

class User:
    def __init__(self, user_id, username, email, password, events_attending, events_volunteering):
        self._user_id = user_id
        self._username = username
        self._email = email
        self._password = password
        self._events_attending = events_attending
        self._events_volunteering = events_volunteering

    def get_user_id(self):
        return self._user_id
    
    def get_username(self):
        return self._username
    
    def get_email(self):
        return self._email
    
    def get_password(self):
        return self._password

class Event:
    def __init__(self, event_id, name, flyer, date, location, description, host, attendees, volunteers):
        self._event_id = event_id
        self._flyer = flyer
        self._name = name
        self._date = date
        self._location = location
        self._description = description
        self._host = host
        self._attendees = attendees
        self._volunteers = volunteers
    
    def get_event_id(self):
        return self._event_id
    
    def get_flyer(self):
        return self._flyer
    
    def get_name(self): 
        return self._name
    
    def get_date(self):
        return self._date
    
    def get_location(self):
        return self._location
    
    def get_description(self):
        return self._description
    
    def get_host(self):
        return self._host
    
    def get_attendees(self):
        return self._attendees
    
    def add_attendee(self, user):
        self._attendees.append(user)

    def get_volunteers(self):
        return self._volunteers
    
    def add_volunteer(self, user):
        self._volunteers.append(user)
