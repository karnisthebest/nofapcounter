import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'
import SignInScreen from './Screens/SigninScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {false ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;