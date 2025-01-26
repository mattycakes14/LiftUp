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
import axios from "axios";

const EventPage = () => {
  const route = useRoute();
  const data = route.params?.data || [];
  const location = data.location;
  const image = data.image;
  console.log(location);
  const [lat, setLat] = useState(34.1458012);
  const [long, setLong] = useState(-118.1488888);
  useEffect(() => {
    const getGeocode = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAQIh2hPONgq_sqSJNzr4fDjGiTNsczkxs`
        );
        if (response.data.results && response.data.results.length > 0) {
          const location = response.data.results[0];
          console.log(location.geometry.location.lat);
          console.log(location.geometry.location.lng);
          setLat(location.geometry.location.lat);
          setLong(location.geometry.location.lng);
        } else {
          console.log("No results found");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getGeocode();
  }, [location]);

  return (
    <View style={styles.eventContainer}>
      <Image style={styles.eventImage} source={{ uri: image }} alt="image" />

      <View style={styles.eventTitleContainer}>
        <Text style={styles.eventTitle}>{data.eventName}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
        <View style={styles.mapViewContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: lat,
              longitude: long,
              longitudeDelta: 0.02,
              latitudeDelta: 0.02,
            }}
            scrollEnabled={false} // Disable scrolling
            zoomEnabled={false} // Disable zooming
            rotateEnabled={false} // Disable rotating
            pitchEnabled={false} // Disable tilting
          />
        </View>
        <View style={styles.descriptionTitleContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapViewContainer: {
    margin: 10,
    height: 250, // Set a fixed height for the map
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  descriptionContainer: {
    marginLeft: 20,
  },
  description: {
    fontSize: 18,
  },
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
  eventContainer: {
    flex: 1,
    padding: 10,
  },
  eventImage: {
    width: "100%",
    height: 250,
  },
  scrollViewContent: {
    paddingBottom: 20, // Add padding to the bottom of the scroll view content
  },
});

export default EventPage;
