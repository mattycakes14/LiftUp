import React, { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  //navigation
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("index");
  };

  return (
    <SafeAreaView>
      <Text>This is the profile tab</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Profile;
