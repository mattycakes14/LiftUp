import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  // Navigation
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("index");
  };

  const handleVerify = () => {
    // Logic for verification
    alert("Verification request sent!");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png",
          }}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Username</Text>
        <TouchableOpacity onPress={handleVerify} style={styles.greenContainer}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>
          Hours Volunteered: <Text style={styles.bold}>120</Text>
        </Text>
        <Text style={styles.statText}>
          Events Attended: <Text style={styles.bold}>15</Text>
        </Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.redContainer}>
          <Text style={styles.verifyText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  statsContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  statText: {
    fontSize: 16,
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  logoutContainer: {},
  greenContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "green",
    padding: 20,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 15,
  },
  redContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "red",
    padding: 20,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 15,
  },
  verifyText: { color: "white" },
  descriptionInput: {
    borderWidth: 0.5,
    height: 140,
  },
});

export default Profile;
