
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function SignUpScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sigin Up</Text>
      <Item rounded style={{ width: "90%", marginTop: 20 }}> 
       <Input 
          autoCapitalize="none" 
          placeholderTextColor="snow" 
          placeholder="username" 
          style={{ color: "white" }} 
          onChangeText={text => setValue('username', text, true)} 
         />
       </Item> 
      <Item rounded style={{ width: "90%", marginTop: 10 }}> 
        <Input 
          secureTextEntry 
          autoCapitalize="none" 
          placeholderTextColor="snow" 
          placeholder="password" 
          style={{ color: "white" }} 
          onChangeText={text => setValue('password', text, true)} 
         /> 
       </Item>
    </View>
    );
  }

export default SignUpScreen;
