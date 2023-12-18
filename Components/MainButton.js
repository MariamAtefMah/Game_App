import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import Colors from "./Constants/Colors";

const MainButton = (Props) => {
  return (
    <TouchableOpacity onPress={Props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{Props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "white",
    fontFamily: "Afacad-Italic",
    fontSize: 18,
  },
});

export default MainButton;
