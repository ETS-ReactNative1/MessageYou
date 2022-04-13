import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ChatHomeScreen from './screens/ChatHomeScreen';
import CreateChatScreen from './screens/CreateChatScreen';
import ChatScreen from './screens/ChatScreen';



//To use Stacks, we first must create an array that will store all of the screens. and add || remove as needed
const Stack = createStackNavigator();

//this variable gives general settings to any Stack that wnats to use a Header, such as color, text color, etc.
const stackOptions = {
	headerTitleStyle: { alignSelf: 'center' },
  headerStyle:{ backgroundColor:"lightblue"},
  headerTitleStyle:{ color:"black"},
};

export default function App({}) {
  return (
    <NavigationContainer>
      {/*This is simply the MENU on top of the application with the usual "back" or "next" buttons*/}
      <Stack.Navigator screenOptions={stackOptions} initialRouteName="Chats">

        {/*Here we define the screen that we want the app to show at the start. 
        In this case, that's the Login screen. Then, the other screens will be called accordingly*/}
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='HomeScreen' component={ChatHomeScreen} />
        <Stack.Screen name='CreateChat' component={CreateChatScreen} />
        <Stack.Screen name='Chat' component={ChatScreen} />

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
