import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

const EventPage = () => {
  const route = useRoute();

  // Retrieve passed data
  const id = route.params?.id;
  const data = route.params?.data || [];

  console.log(data);
  return (
    <View>
      <Text>This is the event page</Text>
      <Text>ID: {id}</Text>

      <Text>Data:{data.eventName}</Text>
    </View>
  );
};

export default EventPage;
