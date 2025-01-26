import React from "react";
import { Text, View } from "react-native";
import LogIn from "./components/LogIn";
import { useFonts } from "expo-font";
export default function Index() {
  const [fontsLoaded] = useFonts({
    // "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    // "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  return (
    <>
      <LogIn />
    </>
  );
}
