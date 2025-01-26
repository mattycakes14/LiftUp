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
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
const CreateEvent = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>Host an Event!</Text>
      </View>
      <View style={styles.eventNameContainer}>
        <Text style={styles.eventName}>Event title:</Text>
        <TextInput
          placeholder="event name"
          placeholderTextColor="gray"
          style={styles.eventNameInput}
          onChange={(newText) => setEvent(newText)}
          value={event}
        />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Enter a Date</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="mm/dd/yyyy"
          maxLength={10}
          onChange={(newText) => setDate(newText)}
        />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Enter A Time</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="00:00"
          placeholderTextColor="gray"
          maxLength={5}
          onChange={(newText) => setTime(newText)}
        />
      </View>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Description for event</Text>
            <Text></Text>
            <TextInput
              style={styles.descriptionInput}
              placeholder="Give an event description!"
              placeholderTextColor="gray"
              multiline={true}
              onChange={(newText) => setDesc(newText)}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
