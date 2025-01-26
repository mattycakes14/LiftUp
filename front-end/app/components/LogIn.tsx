import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUpModal from "../modals/SignUpModal";
import LogInModal from "../modals/LogInModal";

const LogIn = () => {
  const [isLogInVisible, setLogInVisible] = useState(false);
  const [isSignUpVisible, setSignUpVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/LiftUp.png")}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setLogInVisible(true);
          }}
          style={styles.logInButton}
        >
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSignUpVisible(true);
          }}
          style={styles.signUpButton}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <LogInModal state={isLogInVisible} setter={setLogInVisible} />
      <SignUpModal state={isSignUpVisible} setter={setSignUpVisible} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5DF",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 220,
    height: 450,
  },
  logInButton: {
    backgroundColor: "green",
    width: 250,
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
  },
  logInText: {
    color: "white",
  },
  signUpButton: {
    backgroundColor: "#fdfcf5",
    width: 250,
    marginTop: 10,
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
  },
  signUpText: {
    color: "green",
  },
});
export default LogIn;
