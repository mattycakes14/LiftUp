import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const CreateEvent = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");

  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");
  const [host, setHost] = useState(1); // Assuming host is user with ID 1 for example

  const handleSubmit = async () => {
    if (!event || !loc || !date || !desc) {
      alert("Please fill out all fields!");
      return;
    }

    // Format the data for the backend
    const eventData = {
      name: event,
      date: date,
      location: loc,
      description: desc,
      host: host,
    };

    console.log("Sending data to backend:", eventData); // Debug line to check data

    try {
      const response = await axios.post(
        "http://10.13.165.0:5000/events",
        eventData
      ); // Make sure the URL is correct
      console.log("Event created:", response.data);
      alert("Event created successfully!");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Error creating event.");
    }
  };

  // Event List Fetch
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Make the GET request to fetch all events
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://192.168.1.100:5000/events"); // Replace with your backend IP
        setEvents(response.data); // Store the fetched events in the state
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents(); // Call the fetch function on component mount
  }, []); // Empty dependency array ensures this runs only once on mount
  console.log(events);
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView>
            <View style={styles.eventTitleContainer}>
              <Text style={styles.eventTitle}>Host an Event!</Text>
            </View>
            <View style={styles.eventNameContainer}>
              <Text style={styles.eventName}>Event Title:</Text>
              <TextInput
                placeholder="Event name"
                placeholderTextColor="gray"
                style={styles.eventNameInput}
                onChangeText={setEvent}
                value={event}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Event Location:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="Location"
                placeholderTextColor="gray"
                onChangeText={setLoc}
                value={loc}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Event Date:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="mm/dd/yyyy"
                placeholderTextColor="gray"
                maxLength={10}
                onChangeText={setDate}
                value={date}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Event Time:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="00:00"
                placeholderTextColor="gray"
                maxLength={5}
                onChangeText={setTime}
                value={time}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Event Description:</Text>
              <TextInput
                style={styles.descriptionInput}
                placeholder="Give an event description!"
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={setDesc}
                value={desc}
              />
            </View>
            <TouchableOpacity
              style={styles.submitContainer}
              onPress={handleSubmit}
            >
              <Text style={styles.submitText}>Create Event</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      {/* Event List */}
      <View style={{ marginTop: 40 }}>
        <Text style={styles.eventListTitle}>Event List</Text>
        <ScrollView>
          {events.map((event) => (
            <View key={event.event_id} style={styles.eventItem}>
              <Text style={styles.eventItemText}>
                {event.name} - {event.date} - {event.location}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  submitContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "green",
    padding: 20,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 15,
  },
  submitText: { color: "white" },
  descriptionInput: {
    borderWidth: 0.5,
    height: 140,
  },
  dateText: {
    fontSize: 25,
  },
  dateInput: {
    borderWidth: 0.5,
    padding: 8,
  },
  dateContainer: {
    marginTop: 20,
    marginLeft: 45,
    marginRight: 60,
  },
  eventNameInput: {
    borderWidth: 0.5,
    padding: 8,
  },
  eventName: {
    fontSize: 25,
  },
  eventNameContainer: {
    marginTop: 20,
    marginLeft: 45,
    marginRight: 60,
  },
  eventTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  eventTitle: {
    fontSize: 40,
    color: "green",
  },
  eventListTitle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    color: "green",
  },
  eventItem: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventItemText: {
    fontSize: 18,
  },
});

export default CreateEvent;
