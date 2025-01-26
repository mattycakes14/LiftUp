import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
const EventPage = () => {
  const route = useRoute();
  // Retrieve passed data
  const data = route.params?.data || [];
  const location = data.location;

  const image = data.image;
  const [geoloc, setGetLoc] = useState([]);
  useEffect(() => {
    const getGeocode = async () => {
      try {
        const geoCoded = await Location.geocodeAsync(location);
        setGetLoc(geoCoded);
      } catch (err) {
        console.log(err);
      }
    };
    getGeocode();
  }, [location]);

  return (
    <View style={styles.eventContainer}>
      <Image
        style={styles.eventImage}
        source={require(`../assets/images/foodDistribution.jpg`)}
        alt="image"
      />

      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>{data.eventName}</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>🕒 {data.time}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Image
          style={styles.placeholder}
          source={require("../assets/images/placeholder.png")}
        />
        <Text style={styles.location}>{location}</Text>
      </View>
      <View>
        <Text>Map of {location}</Text>
      </View>
      <View style={styles.descriptionTitleContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  descriptionContainer: {},
  description: {},
  descriptionTitleContainer: {
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 30,
  },
  placeholder: {
    width: 40,
    height: 40,
  },
  locationContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  location: {
    fontSize: 30,
  },
  timeContainer: {
    marginTop: 20,
  },
  time: {
    fontSize: 30,
  },
  eventTitleContainer: {
    marginLeft: 5,
  },
  eventTitle: {
    fontSize: 35,
  },
  eventContainer: {},
  eventImage: {
    width: 400,
    height: 250,
  },
});
export default EventPage;
