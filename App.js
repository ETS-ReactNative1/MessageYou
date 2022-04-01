import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Login from './screens/Login';
import Register from './screens/Register';
import Chats from './screens/Chats';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

{/*To use Stacks, we first must create a variable of it*/}
const Stack = createStackNavigator();

//this variable gives settings to any Stack that uses it, such as color, text color, etc.


export default function App() {
  return (
    <NavigationContainer>
      {/*This is simply the MENU on top of the application with the usual "back" or "next" buttons*/}
      <Stack.Navigator screenOptions={{
        headerStyle:{ backgroundColor:"#17202A"},
        headerTitleStyle:{ color:"white"}
      }}>

        {/*Here we define the screen that we want the app to show at the start. 
        In this case, that's the Login screen*/}
        <Stack.Screen name='Login' component={Login} />

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
