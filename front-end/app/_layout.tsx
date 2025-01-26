import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="TabNavigator"
        options={{ gestureEnabled: false, headerShown: false }}
      />
      <Stack.Screen name="EventPage" />
    </Stack>
  );
}
