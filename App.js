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
  Dimensions
} from "react-native";

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImage from './app/screens/ViewImageScreen'

export default function App() {
  return (
    <ViewImage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view1: {
    width: "100%",
    height: "30%",
    backgroundColor: 'red'
  }
});
