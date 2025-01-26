import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
const CreateEvent = () => {
  const route = useRoute();

  return (
    <SafeAreaView>
      <Text>This is the Create Events Tab</Text>
    </SafeAreaView>
  );
};

export default CreateEvent;
