import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("index");
  };
  return (
    <View>
      <Text>This is the profile tab</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Profile;
