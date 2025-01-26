import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CreateEvent from "./tabs/CreateEvent";
import Explore from "./tabs/Explore";
import Profile from "./tabs/Profile";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name={"earth-outline"}
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name={"calendar-outline"}
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name={"person-outline"}
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
