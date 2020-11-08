import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";


export default function App() {
  const [firstName, setFirstName] = useState('ss');
  console.log(firstName);

  return (
    <Screen>
      <AppTextInput
        icon='email'
        placeholder='Email'
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});
