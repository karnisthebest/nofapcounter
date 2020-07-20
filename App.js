import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import SignInScreen from "./Screens/SigninScreen";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { StyleProvider } from "native-base";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import SignUpScreen from "./Screens/SignUpScreen";

const Stack = createStackNavigator();

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
  )
}

const AppScreens = () => {
  return (
 <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
      }}
    />
  </AppStack.Navigator>
  )
};
function App() {
  let [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const isLoggedIn = false;
  return (
    <StyleProvider style={getTheme(material)}>
       <NavigationContainer>
      {!isLoggedIn ? <AuthScreens /> : <AppScreens />}
    </NavigationContainer>
    </StyleProvider>
  );
}

export default App;
