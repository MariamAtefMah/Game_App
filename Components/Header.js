import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

//take care in writting title in (porps.title) as it will be used as it is in App.js file.
const Header = (Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{Props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center'
    },
    headerTitle: {
        color: 'black',
        fontFamily: 'Afacad-Bold',
        fontSize: 20,
    },
});

export default Header;
