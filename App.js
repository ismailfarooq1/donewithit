import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Dimensions,
} from "react-native";

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen'
import Card from './app/components/Card'
import ViewImage from './app/screens/ViewImageScreen'
import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountsScreen from "./app/screens/AccountsScreen";

export default function App() {
  return (
    <AccountsScreen />
  );
}

const styles = StyleSheet.create({

});
