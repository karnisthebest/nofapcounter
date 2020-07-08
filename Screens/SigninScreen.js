
import * as React from 'react';
import { ImageBackground } from 'react-native';
import {Text} from 'native-base'
import MountainBackground from '../assets/mountaincloud.jpg'
function HomeScreen({navigation}) {
    return (
        <ImageBackground source={MountainBackground} style={{width: '100%', height: '100%'}}>
        <Text style={{color: 'white'}}>Inside</Text>
      </ImageBackground>
    );
  }

export default HomeScreen;