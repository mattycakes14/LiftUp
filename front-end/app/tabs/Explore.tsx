import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
} from "react-native";
import SearchTags from "../components/SearchTags";
import { useNavigation } from "@react-navigation/native";

const Explore = () => {
  //handle navigation
  const navigation = useNavigation();
  //selected data
  const [search, setSearch] = useState("");
  //filter search
  const [filteredData, setFilteredData] = useState(eventData);
  useEffect(() => {
    if (search === "") {
      setFilteredData(eventData);
    } else {
      const filtered = eventData.filter((item) =>
        item.eventName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [search]);
  //sample data
  const eventData = [
    {
      id: 1,
      eventName: "Food Distribution Service",
      time: "2:00 PM",
      location: "Pasadena",
      description:
        "Join us for a food distribution event to help those in need in Pasadena. Free meals and groceries will be provided to the community.",
      image:
        "https://img.freepik.com/free-photo/close-up-volunteers-collecting-food_23-2149182026.jpg?semt=ais_hybrid",
    },
    {
      id: 2,
      eventName: "Temporary Housing Availability",
      time: "10:00 AM",
      location: "Arcadia",
      description:
        "Providing temporary housing for individuals affected by the disaster. We will assist in finding safe and secure shelter options.",
      image:
        "https://media.istockphoto.com/id/1366977484/photo/portrait-of-a-depressed-man.jpg?s=612x612&w=0&k=20&c=wpkOgZCe93l0JsZphBPMuBOqnvd_yCIlrFQyxWsouz0=",
    },
    {
      id: 3,
      eventName: "Community Volunteer Sign-Up",
      time: "12:00 PM",
      location: "Glendale",
      description:
        "Sign up to volunteer and make a difference in your community. We need your help to support various recovery efforts in Glendale.",
      image:
        "https://media.istockphoto.com/id/1199706305/photo/friends-linking-arms-in-unity.jpg?s=612x612&w=0&k=20&c=sOHOOdPG5hcNdD9BWC5vzRvRE_wS43usvWGaJLCUhu8=",
    },
    {
      id: 4,
      eventName: "Emergency Shelter Assistance",
      time: "8:00 PM",
      location: "Monrovia",
      description:
        "Emergency shelter assistance is available to those who have lost their homes. We will provide temporary housing, food, and supplies.",
      image:
        "https://thumbs.dreamstime.com/b/large-emergency-shelter-rows-beds-dimly-lit-prepared-flood-victims-large-emergency-shelter-rows-beds-dimly-lit-335389918.jpg",
    },
    {
      id: 5,
      eventName: "Clothing and Essentials Drive",
      time: "3:00 PM",
      location: "Burbank",
      description:
        "A clothing and essentials drive to collect items such as clothes, hygiene products, and toiletries for those in need in Burbank.",
      image:
        "https://media.istockphoto.com/id/1314806165/photo/girl-puts-in-a-box-with-donations-items-volunteering.jpg?s=612x612&w=0&k=20&c=AUKJs9FLjgSn8WVZJCD1H_mSLslMikwQbq1I_qnP8iA=",
    },
    {
      id: 6,
      eventName: "Free Medical Clinic",
      time: "9:00 AM",
      location: "Malibu",
      description:
        "A free medical clinic offering basic health services to those affected by the disaster in Malibu. Doctors, nurses, and specialists will be available.",
      image:
        "https://st3.depositphotos.com/1643295/18245/i/450/depositphotos_182459440-stock-photo-portrait-confident-general-practitioner-looking.jpg",
    },
    {
      id: 7,
      eventName: "Disaster Relief Fundraiser",
      time: "6:00 PM",
      location: "Santa Monica",
      description:
        "Join us for a fundraiser to support disaster relief efforts. All proceeds will go towards helping affected families and communities.",
      image: "https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg",
    },
    {
      id: 8,
      eventName: "Food and Water Distribution",
      time: "1:00 PM",
      location: "Westlake Village",
      description:
        "Distribute food and water to families in need in Westlake Village. Volunteers are welcome to help with organizing and distributing supplies.",
      image:
        "https://media.istockphoto.com/id/947503292/photo/team-of-volunteers-sorts-goods-at-food-bank.jpg?s=612x612&w=0&k=20&c=La7gP_nzdtBCvQzkeazqBI6z6xwI06--OrUMqPmShFo=",
    },
    {
      id: 9,
      eventName: "Local Cleanup Effort",
      time: "5:00 PM",
      location: "Simi Valley",
      description:
        "Participate in a local cleanup effort to restore Simi Valley's public spaces. Volunteers will help clean parks, streets, and other areas.",
      image:
        "https://images.stockcake.com/public/b/e/f/bef7743b-d491-4f8b-be6f-6973c8574cc1_large/community-cleanup-effort-stockcake.jpg",
    },
    {
      id: 10,
      eventName: "Pet Relief and Care Services",
      time: "7:00 AM",
      location: "Calabasas",
      description:
        "Offering relief services and care for pets affected by the disaster. We will provide food, shelter, and medical assistance for animals.",
      image:
        "https://images.unsplash.com/photo-1581888227599-779811939961?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 11,
      eventName: "Psychological Support Sessions",
      time: "11:00 AM",
      location: "Santa Clarita",
      description:
        "Offering psychological support sessions for individuals affected by the disaster. Professional counselors will be available for mental health assistance.",
      image:
        "https://media.istockphoto.com/id/1389444855/photo/shot-of-an-attractive-young-woman-sitting-and-talking-to-her-psychologist-during-a.jpg?s=612x612&w=0&k=20&c=LpV9HmdD0_Udg4YlttvwoJyLZWJThxXq-IJKeiy3zbs=",
    },
    {
      id: 12,
      eventName: "Disaster Preparedness Workshop",
      time: "9:00 AM",
      location: "Malibu",
      description:
        "Attend a disaster preparedness workshop to learn how to stay safe and plan for emergencies. Topics include evacuation plans, first aid, and survival skills.",
      image:
        "https://media.istockphoto.com/id/176990809/photo/hand-completing-emergency-preparation-list-by-equipment.jpg?s=612x612&w=0&k=20&c=z9cVokH3g8b4fBkmUxCY9a-niTtgyImA9jq3m6Hckl4=",
    },
    {
      id: 13,
      eventName: "Community Rebuilding Project",
      time: "8:00 AM",
      location: "Santa Monica",
      description:
        "Volunteer in the community rebuilding project to help restore homes and public spaces in Santa Monica. Join us to make a difference.",
      image:
        "https://media.istockphoto.com/id/1440404344/photo/group-of-people-volunteering-to-build-a-house.jpg?s=612x612&w=0&k=20&c=Ua-7ttazgq6plYC1y-jLhFd2tGHzzPxGiSD8-_c3Qzs=",
    },
    {
      id: 14,
      eventName: "Donation Drop-off Locations",
      time: "10:00 AM",
      location: "Pasadena",
      description:
        "Drop off your donations of clothing, food, and essentials at designated locations in Pasadena. Your contributions will help those in need.",
      image:
        "https://static.vecteezy.com/system/resources/previews/006/425/235/non_2x/holding-clothing-donation-box-with-used-clothes-and-doll-at-home-to-support-help-for-poor-people-in-the-world-free-photo.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search for an event"
          placeholderTextColor="gray"
          onChangeText={(newText) => setSearch(newText)}
          style={styles.searchBar}
          value={search}
        ></TextInput>
      </View>
      <SearchTags />
      <View style={styles.flatListContainer}>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
          renderItem={
            ({ item }) => (
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
            ) // Return null if the condition isn't met
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceacc",
  },
  searchBarContainer: {
    alignItems: "center",
  },
  searchBar: {
    borderWidth: 0.5,
    width: "90%",
    borderRadius: 15,
    padding: 10,
  },
  flatListContainer: {
    marginTop: 20,
  },
  eventContainer: {
    margin: 5,
  },
  touchableContainer: {
    backgroundColor: "#f1eaac",
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
