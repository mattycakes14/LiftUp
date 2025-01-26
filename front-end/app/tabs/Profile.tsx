import React, { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const Profile = () => {
  //navigation
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("index");
  };

  //test
  const fetchData = async () => {
    axios
      .get("http://192.168.1.10:5000/users")
      .then((response) => {
        console.log(response.data); // Handle the user data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <SafeAreaView>
      <Text>This is the profile tab</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Get Data" onPress={fetchData} />
    </SafeAreaView>
  );
};

export default Profile;
