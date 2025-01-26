import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Button,
} from "react-native";
import SearchBar from "../components/SearchBar";
import SearchTags from "../components/SearchTags";
import { useNavigation } from "@react-navigation/native";
import EventPage from "../eventPage";
const Explore = () => {
  //handle navigation
  const navigation = useNavigation();
  //selected data
  const [selectedData, setSelectedData] = useState([]);
  //sample data
  const eventData = [
    {
      id: 1,
      eventName: "Food Distribution Service",
      time: "2:00 PM",
      location: "Pasadena",
    },
    {
      id: 2,
      eventName: "Temporary Housing Availability",
      time: "10:00 AM",
      location: "Arcadia",
    },
    {
      id: 3,
      eventName: "Community Volunteer Sign-Up",
      time: "12:00 PM",
      location: "Glendale",
    },
    {
      id: 4,
      eventName: "Emergency Shelter Assistance",
      time: "8:00 PM",
      location: "Monrovia",
    },
    {
      id: 5,
      eventName: "Clothing and Essentials Drive",
      time: "3:00 PM",
      location: "Burbank",
    },
    {
      id: 6,
      eventName: "Free Medical Clinic",
      time: "9:00 AM",
      location: "Malibu",
    },
    {
      id: 7,
      eventName: "Disaster Relief Fundraiser",
      time: "6:00 PM",
      location: "Santa Monica",
    },
    {
      id: 8,
      eventName: "Food and Water Distribution",
      time: "1:00 PM",
      location: "Westlake Village",
    },
    {
      id: 9,
      eventName: "Local Cleanup Effort",
      time: "5:00 PM",
      location: "Simi Valley",
    },
    {
      id: 10,
      eventName: "Pet Relief and Care Services",
      time: "7:00 AM",
      location: "Calabasas",
    },
    {
      id: 11,
      eventName: "Temporary Housing Search Help",
      time: "4:00 PM",
      location: "Lancaster",
    },
    {
      id: 12,
      eventName: "Psychological Support Sessions",
      time: "11:00 AM",
      location: "Santa Clarita",
    },
    {
      id: 13,
      eventName: "Disaster Preparedness Workshop",
      time: "9:00 AM",
      location: "Malibu",
    },
    {
      id: 14,
      eventName: "Community Rebuilding Project",
      time: "8:00 AM",
      location: "Santa Monica",
    },
    {
      id: 15,
      eventName: "Donation Drop-off Locations",
      time: "10:00 AM",
      location: "Pasadena",
    },
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
              <TouchableOpacity
                onPress={() => {
                  setTimeout(() => {
                    navigation.navigate("EventPage", {
                      id: 5,
                      data: item,
                    });
                  }, 500);
                }}
                style={styles.touchableContainer}
              >
                <View style={styles.eventNameContainer}>
                  <Text style={styles.eventNameText}>{item.eventName}</Text>
                </View>
                <View style={styles.timeContainer}>
                  <Text>{item.time}</Text>
                  <Image
                    style={styles.location}
                    source={require("../../assets/images/placeholder.png")}
                  />
                  <Text style={styles.text}>{item.location}</Text>
                </View>
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
    backgroundColor: "orange",
    height: 100,
  },
  eventNameContainer: {
    marginLeft: 5,
    marginTop: 10,
  },
  eventNameText: {
    color: "white",
  },
  timeContainer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    left: 5,
    top: 70,
  },
  text: {
    marginLeft: 1,
  },
  location: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
});
export default Explore;
