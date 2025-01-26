import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import SearchTags from "../components/SearchTags";

const Explore = () => {
  //sample data
  const eventData = [
    { id: 1, eventName: "Food Distribution Service", time: "2:00 PM" },
    { id: 2, eventName: "Temporary Housing Availability", time: "10:00 AM" },
    { id: 3, eventName: "Community Volunteer Sign-Up", time: "12:00 PM" },
    { id: 4, eventName: "Emergency Shelter Assistance", time: "8:00 PM" },
    { id: 5, eventName: "Clothing and Essentials Drive", time: "3:00 PM" },
    { id: 6, eventName: "Free Medical Clinic", time: "9:00 AM" },
    { id: 7, eventName: "Disaster Relief Fundraiser", time: "6:00 PM" },
    { id: 8, eventName: "Food and Water Distribution", time: "1:00 PM" },
    { id: 9, eventName: "Local Cleanup Effort", time: "5:00 PM" },
    { id: 10, eventName: "Pet Relief and Care Services", time: "7:00 AM" },
    { id: 11, eventName: "Temporary Housing Search Help", time: "4:00 PM" },
    { id: 12, eventName: "Psychological Support Sessions", time: "11:00 AM" },
    { id: 13, eventName: "Disaster Preparedness Workshop", time: "9:00 AM" },
    { id: 14, eventName: "Community Rebuilding Project", time: "8:00 AM" },
    { id: 15, eventName: "Donation Drop-off Locations", time: "10:00 AM" },
  ];
  return (
    <SafeAreaView>
      <SearchBar />
      <SearchTags />
      <View style={styles.flatListContainer}>
        <FlatList
          data={eventData}
          renderItem={({ item }) => (
            <View style={styles.eventContainer}>
              <TouchableOpacity style={styles.touchableContainer}>
                <Text>{item.eventName}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 20,
  },
  eventContainer: {
    margin: 5,
  },
  touchableContainer: {
    backgroundColor: "green",
  },
});
export default Explore;
