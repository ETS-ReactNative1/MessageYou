import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image} from "react-native-elements";
import { StatusBar } from 'expo-status-bar'; //https://docs.expo.dev/versions/latest/sdk/status-bar/
import {useState} from "react";

var logo = require ('../assets/logo.png');


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      
      <StatusBar style="light" />
      <Image source={logo}
      style={{width:145, height:145}} />
      
      <View style={styles.inputStyle}>
        <Input  //Input field for the email. 
        placeholder='Email' type="email" 
        value={email} onChangeText={(text) => setEmail(text)} />

        <Input //Input field for the password. 
        placeholder='Password' type="password" 
        secureTextEntry //Makes that the password shows in hidden black dots
        value={password} onChangeText={(password) => setPassword(password)}/>
      </View>
      <Button containerStyle={styles.button} title="Login"/>
      <Button containerStyle={styles.button} title="Register" type="outline"/>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  inputStyle:{

  }
 
})