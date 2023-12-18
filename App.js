import React from "react";
import { useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// images name cannot have spaces.
//(./Components) means we go to antother folder in the same directory.
import Header from "./Components/Header";
import StartGameScreen from "./Screens/StartGameScreen";

/*
// Maximallian method to decleare fonts
const fetchFonts = () => {
  Font.loadAsync({
    //'Afacad-Bold' is an identifier.
    'Afacad-Bold': require('./assets/fonts/Afacad-Bold.ttf'),
    'Afacad-Italic': require('./assets/fonts/Afacad-Italic.ttf'),
    'Afacad-Regular': require('./assets/fonts/Afacad-Regular.ttf'),
  });
};
*/
// Loader screen, start app screen.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Afacad-Bold": require("./assets/fonts/Afacad-Bold.ttf"),
    "Afacad-Italic": require("./assets/fonts/Afacad-Italic.ttf"),
    "Afacad-Regular": require("./assets/fonts/Afacad-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]); //if this change the function will run again, otherwise not(Dependancy).

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header title="Guess a Number" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/BooksCover.jpg")}
          resizeMode="cover"
        />
      </View>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 100,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: '100%',
    borderRadius: 200,
    //marginHorizontal: 100,
    //marginVertical: 100,
  },
});
