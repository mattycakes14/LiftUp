import React, { useState } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";

const CreateEvent = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [tags, setTags] = useState([
    { label: "Food Distribution", value: "food" },
    { label: "Clothing Drive", value: "clothing" },
    { label: "Volunteer Signup", value: "volunteer" },
    { label: "Medical Clinic", value: "medical" },
    { label: "Disaster Relief", value: "relief" },
  ]);
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
                placeholder="event name"
                placeholderTextColor="gray"
                style={styles.eventNameInput}
                onChange={(newText) => setEvent(newText)}
                value={event}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Enter Location:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="location"
                placeholderTextColor="gray"
                onChange={(newText) => setLoc(newText)}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Enter Date:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="mm/dd/yyyy"
                placeholderTextColor="gray"
                maxLength={10}
                onChange={(newText) => setDate(newText)}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Enter Time:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="00:00"
                placeholderTextColor="gray"
                maxLength={5}
                onChange={(newText) => setTime(newText)}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Event Description:</Text>
              <Text></Text>
              <TextInput
                style={styles.descriptionInput}
                placeholder="Give an event description!"
                placeholderTextColor="gray"
                multiline={true}
                onChange={(newText) => setDesc(newText)}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <TouchableOpacity style={styles.submitContainer}>
        <Text style={styles.submitText}>Create Event</Text>
      </TouchableOpacity>
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
    marginLeft: 5,
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
    marginLeft: 5,
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
});
export default CreateEvent;
