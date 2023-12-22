import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {Ionicons} from '@expo/vector-icons' //how to import icons

//(../Components) means we go back one step to enter another folder in the same directory.
import Colors from "../Components/Constants/Colors";
import MainButton from "../Components/MainButton";

const StartGameScreen = (Props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput keyboardType="numeric" placeholder="_____"/>
        <View style={styles.buttonConatianer}>
          <MainButton onPress={() => {}}>Reset</MainButton>
          <MainButton onPress={() => {}}><Ionicons name="checkmark-outline" size={22} /></MainButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10, //this elevation make the shadow styles appear on android.
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10, // It acts as a styling attribute that controls the curvature of corners.
    },
    buttonConatianer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
});

export default StartGameScreen;
