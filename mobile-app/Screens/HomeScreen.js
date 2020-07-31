import React, {useContext} from "react";
import { View, Text, Button } from 'react-native';
import AuthContext from '../components/Auth/AuthContext'
function HomeScreen({navigation}) {
  const {signOut} = useContext(AuthContext)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Sign out"
        onPress={() => signOut()}
      />
    </View>
    );
  }

export default HomeScreen;