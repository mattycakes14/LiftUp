import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
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
        <Text style={styles.eventStatsText}>
          Hours Volunteered: <Text style={styles.bold}>120</Text>
        </Text>
        <Text style={styles.eventStatsText}>
          Events Attended: <Text style={styles.bold}>15</Text>
        </Text>
        <Text style={styles.eventStatsText}>
          Events Hosted: <Text style={styles.bold}>3</Text>
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
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  username: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },
  statsContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  eventStatsText: {
    fontSize: 18,
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  greenContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 10,
    borderRadius: 15,
    width: "80%", // Dynamic width
  },
  redContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 200,
    borderRadius: 15,
    width: "80%", // Dynamic width
  },
  verifyText: {
    color: "white",
    fontSize: 18,
  },
  logoutContainer: {
    alignItems: "center",
    marginTop: 30, // Adjusting spacing
  },
});

export default Profile;
