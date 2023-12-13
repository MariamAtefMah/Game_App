import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

//(../Components) means we go back one step to enter another folder in the same directory.
import Colors from "../Components/Constants/Colors";

const StartGameScreen = (Props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput keyboardType="numeric"/>
        <View style={styles.buttonConatianer}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent}/>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary}/>
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
