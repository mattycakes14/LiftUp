import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import * as Location from "expo-location";
const EventPage = () => {
  const route = useRoute();
  // Retrieve passed data
  const data = route.params?.data || [];
  const location = data.location;
  console.log(location);

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
    <View>
      <Text>Data:{data.eventName}</Text>
    </View>
  );
};

export default EventPage;
