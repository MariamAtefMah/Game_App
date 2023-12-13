import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//(./Components) means we go to antother folder in the same directory.
import Header from "./Components/Header";
import StartGameScreen from "./Screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
