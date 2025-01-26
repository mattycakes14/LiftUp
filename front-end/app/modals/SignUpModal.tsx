import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpModal = (props) => {
  //navigation to tabnav
  const navigation = useNavigation();

  //state for password and username
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //handle successful Sign Up
  const handleSignUp = () => {
    navigation.navigate("TabNavigator");
    props.setter(false);
  };
  return (
    <SafeAreaView>
      <Modal visible={props.state} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.closeContainer}>
                <TouchableOpacity onPress={() => props.setter(false)}>
                  <Image
                    style={styles.closeImage}
                    source={require("../../assets/images/close.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", marginTop: 5 }}>
                <Text style={styles.topLogInText}>Sign Up</Text>
              </View>
              <View style={styles.inputContentUsername}>
                <Text>Username</Text>
                <TextInput
                  value={username}
                  style={styles.usernameInput}
                  onChangeText={(newText) => setUsername(newText)}
                />
              </View>
              <View style={styles.inputContentPassword}>
                <Text>Password</Text>
                <TextInput
                  value={password}
                  secureTextEntry={true}
                  style={styles.usernameInput}
                  onChangeText={(newText) => {
                    setPassword(newText);
                  }}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.logInContainer}
                  onPress={handleSignUp}
                >
                  <Text style={styles.logInText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    height: 300,
    width: "70%",
    borderRadius: 20,
  },
  usernameInput: {
    borderWidth: 0.5,
    width: 190,
    padding: 2,
    borderRadius: 10,
  },
  inputContentUsername: {
    marginLeft: 20,
    marginTop: 20,
  },
  inputContentPassword: {
    marginLeft: 20,
    marginTop: 5,
  },
  topLogInText: {
    fontSize: 20,
    color: "black",
  },
  logInContainer: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "green",
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    borderRadius: 15,
  },
  logInText: {
    color: "white",
  },
  closeContainer: {
    marginLeft: 10,
    marginTop: 15,
  },
  closeImage: { width: 20, height: 20 },
});
export default SignUpModal;
