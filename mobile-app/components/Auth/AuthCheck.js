import React, { useContext, useEffect } from "react";
import HomeScreen from "../../Screens/HomeScreen";
import SignInScreen from "../../Screens/SigninScreen";
import SignUpScreen from "../../Screens/SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";
import AuthContext from "./AuthContext";
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
  );
};

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
  );
};

const AuthCheck = () => {
  const {user} = useContext(AuthContext)
  useEffect(() => {
      const getToken = async () => {
        const token = await AsyncStorage.getItem('token')
        return console.log(token, 'token')
      }
      getToken()
  }, [])
//   const token = await AsyncStorage.getItem('token')
//   console.log("AuthCheck -> token", token)
  return (
    <React.Fragment>
      {!user ? <AuthScreens /> : <AppScreens />}
    </React.Fragment>
  );
};

export default AuthCheck;
