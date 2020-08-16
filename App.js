import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Button" onPress={() => console.log("Hello")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
