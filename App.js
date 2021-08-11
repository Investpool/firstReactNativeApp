import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileScreen from "./src/Screens/ProfileScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
