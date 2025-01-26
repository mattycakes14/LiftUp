import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView from "react-native-maps";
import axios from "axios";

const EventPage = () => {
  const route = useRoute();
  const data = route.params?.data || [];
  const location = data.location;
  const image = data.image;

  console.log(data.longitude);
  console.log(location);

  const [lat, setLat] = useState(data.latitude);
  const [long, setLong] = useState(data.longitude);

  const [isAttending, setAttending] = useState(false);
  const roles = ["Volunteer", "Donor", "Impactee", "Sponsor"];
  const [selectedItem, setSelectedItem] = useState(null);
  //   useEffect(() => {
  //     const getGeocode = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=API_Key
  //         );
  //         if (response.data.results && response.data.results.length > 0) {
  //           const location = response.data.results[0];
  //           console.log(location.geometry.location.lat);
  //           console.log(location.geometry.location.lng);
  //           setLat(location.geometry.location.lat);
  //           setLong(location.geometry.location.lng);
  //         } else {
  //           console.log("No results found");
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getGeocode();
  //   }, [location]);

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
        <View style={styles.roleContainer}>
          <Text style={styles.role}>Select Your Role</Text>
          <View style={styles.roleComponentContainer}>
            {roles.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedItem(index)}
                style={[
                  styles.roleComponents,
                  selectedItem === index && styles.dark, // Apply darkened style when selected
                ]}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
              longitudeDelta: 0.05,
              latitudeDelta: 0.05,
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

        <TouchableOpacity
          onPress={() => setAttending(true)}
          style={styles.attendContainer}
        >
          {isAttending ? (
            <Text style={styles.attendText}>You're In!</Text>
          ) : (
            <Text style={styles.attendText}>Attend Event</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  attendText: {
    color: "white",
  },
  attendContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "green",
    padding: 20,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 15,
  },
  dark: {
    backgroundColor: "#4f8c32",
  },
  roleComponents: {
    backgroundColor: "#95d577",
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  roleComponentContainer: {
    flexDirection: "row",
  },
  roleContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  role: { fontSize: 20 },
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
