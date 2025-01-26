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

const CreateEvent = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");

  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");

  return (
    <SafeAreaView style={styles.container}>
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
                onChangeText={(newText) => setEvent(newText)}
                value={event}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Enter Location:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="location"
                placeholderTextColor="gray"
                onChangeText={(newText) => setLoc(newText)}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Enter Date:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="mm/dd/yyyy"
                placeholderTextColor="gray"
                maxLength={10}
                onChangeText={(newText) => setDate(newText)}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Enter Time:</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="00:00"
                placeholderTextColor="gray"
                maxLength={5}
                onChangeText={(newText) => setTime(newText)}
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
                onChangeTextText={(newText) => setDesc(newText)}
              />
            </View>
            <TouchableOpacity style={styles.submitContainer}>
              <Text style={styles.submitText}>Create Event</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f2" },
  submitContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
