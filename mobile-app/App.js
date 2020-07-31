import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import SignInScreen from "./Screens/SigninScreen";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { StyleProvider } from "native-base";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import SignUpScreen from "./Screens/SignUpScreen";
import AuthProvider from "./components/Auth/AuthProvider";
import AuthCheck from "./components/Auth/AuthCheck";

function App() {
  let [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const isLoggedIn = false;
  return (
    <AuthProvider>
    <StyleProvider style={getTheme(material)}>
      <NavigationContainer>
        <AuthCheck/>
      </NavigationContainer>
    </StyleProvider>
    </AuthProvider>
  );
}

export default App;
