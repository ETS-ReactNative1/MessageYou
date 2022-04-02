import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Chats from './screens/ChatScreen';


{/*To use Stacks, we first must create a variable of it*/}
const Stack = createStackNavigator();

//this variable gives settings to any Stack that uses it, such as color, text color, etc.
const stackOptions = {
	headerTitleStyle: { alignSelf: 'center' },
  headerStyle:{ backgroundColor:"#17202A"},
  headerTitleStyle:{ color:"white"},
};

export default function App({navigation}) {
  return (
    <NavigationContainer>
      {/*This is simply the MENU on top of the application with the usual "back" or "next" buttons*/}
      <Stack.Navigator screenOptions={stackOptions}>

        {/*Here we define the screen that we want the app to show at the start. 
        In this case, that's the Login screen*/}
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
