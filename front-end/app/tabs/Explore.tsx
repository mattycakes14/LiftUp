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
      description:
        "Join us for a food distribution event to help those in need in Pasadena. Free meals and groceries will be provided to the community.",
    },
    {
      id: 2,
      eventName: "Temporary Housing Availability",
      time: "10:00 AM",
      location: "Arcadia",
      description:
        "Providing temporary housing for individuals affected by the disaster. We will assist in finding safe and secure shelter options.",
    },
    {
      id: 3,
      eventName: "Community Volunteer Sign-Up",
      time: "12:00 PM",
      location: "Glendale",
      description:
        "Sign up to volunteer and make a difference in your community. We need your help to support various recovery efforts in Glendale.",
    },
    {
      id: 4,
      eventName: "Emergency Shelter Assistance",
      time: "8:00 PM",
      location: "Monrovia",
      description:
        "Emergency shelter assistance is available to those who have lost their homes. We will provide temporary housing, food, and supplies.",
    },
    {
      id: 5,
      eventName: "Clothing and Essentials Drive",
      time: "3:00 PM",
      location: "Burbank",
      description:
        "A clothing and essentials drive to collect items such as clothes, hygiene products, and toiletries for those in need in Burbank.",
    },
    {
      id: 6,
      eventName: "Free Medical Clinic",
      time: "9:00 AM",
      location: "Malibu",
      description:
        "A free medical clinic offering basic health services to those affected by the disaster in Malibu. Doctors, nurses, and specialists will be available.",
    },
    {
      id: 7,
      eventName: "Disaster Relief Fundraiser",
      time: "6:00 PM",
      location: "Santa Monica",
      description:
        "Join us for a fundraiser to support disaster relief efforts. All proceeds will go towards helping affected families and communities.",
    },
    {
      id: 8,
      eventName: "Food and Water Distribution",
      time: "1:00 PM",
      location: "Westlake Village",
      description:
        "Distribute food and water to families in need in Westlake Village. Volunteers are welcome to help with organizing and distributing supplies.",
    },
    {
      id: 9,
      eventName: "Local Cleanup Effort",
      time: "5:00 PM",
      location: "Simi Valley",
      description:
        "Participate in a local cleanup effort to restore Simi Valley's public spaces. Volunteers will help clean parks, streets, and other areas.",
    },
    {
      id: 10,
      eventName: "Pet Relief and Care Services",
      time: "7:00 AM",
      location: "Calabasas",
      description:
        "Offering relief services and care for pets affected by the disaster. We will provide food, shelter, and medical assistance for animals.",
    },
    {
      id: 11,
      eventName: "Temporary Housing Search Help",
      time: "4:00 PM",
      location: "Lancaster",
      description:
        "Helping those in need find temporary housing options. Our team will assist with searching for available shelters and housing services in Lancaster.",
    },
    {
      id: 12,
      eventName: "Psychological Support Sessions",
      time: "11:00 AM",
      location: "Santa Clarita",
      description:
        "Offering psychological support sessions for individuals affected by the disaster. Professional counselors will be available for mental health assistance.",
    },
    {
      id: 13,
      eventName: "Disaster Preparedness Workshop",
      time: "9:00 AM",
      location: "Malibu",
      description:
        "Attend a disaster preparedness workshop to learn how to stay safe and plan for emergencies. Topics include evacuation plans, first aid, and survival skills.",
    },
    {
      id: 14,
      eventName: "Community Rebuilding Project",
      time: "8:00 AM",
      location: "Santa Monica",
      description:
        "Volunteer in the community rebuilding project to help restore homes and public spaces in Santa Monica. Join us to make a difference.",
    },
    {
      id: 15,
      eventName: "Donation Drop-off Locations",
      time: "10:00 AM",
      location: "Pasadena",
      description:
        "Drop off your donations of clothing, food, and essentials at designated locations in Pasadena. Your contributions will help those in need.",
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
