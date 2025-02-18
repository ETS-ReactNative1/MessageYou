/* 
Author: Dmytro Kavetskyy
LoginScreen will allow registered users to login with their email + password
*/
import React, { useEffect, useState , useLayoutEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image} from "react-native-elements";
import { StatusBar } from 'expo-status-bar'; //https://docs.expo.dev/versions/latest/sdk/status-bar/
import { auth } from '../firebase';

var logo = require ('../assets/logo.png');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //to customize each header for each Chat uniquely. we can use LayourEffect from navigation to pass 
  // the unique id and make the headers unique
  useLayoutEffect( ()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[navigation])
  
  useEffect( () =>{
  //If the user is authenticated, then we replace the stack with the Chats Screen. 
  //The reason of "Replacing" is because once someone is logged in. we don't wanna 
  //show them the Login/Register screens again
    const unsuscribe = auth.onAuthStateChanged((authUser)=>{ 
      if (authUser){ 
        navigation.replace("HomeScreen");
      }
    });
    return unsuscribe;
  },[])

  //This is the most important function. It uses a firebase function to authenticate the user
  //and will give an error message if one of the values is wrong.
  const signIn = ()=>{
    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert("Your Email or Password is Incorrect"));
  };
  
  return (
    <View style={styles.loginContainer}>

      {/*StatusBar is the bar with the power, wifi, etc icons on top*/}
      <StatusBar style="light" />
      <Image source={logo}
      style={{width:145, height:145}} />
      
      <View style={styles.inputStyle}>
        <Input style={styles.textStyle}  //Input field for the email. 
        placeholder='Email' type="email" 
        value={email} onChangeText={(text) => setEmail(text, text.trim())} />

        <Input style={styles.textStyle} //Input field for the password. 
        placeholder='Password' type="password" 
        secureTextEntry //Makes that the password shows in hidden black dots
        value={password} onChangeText={(password) => setPassword(password)}/>
      </View>

      {/*Buttons for the Login & Register functions*/}
      
      <Button containerStyle={styles.button} title="Login" onPress={signIn}/>
      <Button containerStyle={styles.button} title="Register" type="outline" 
      onPress={()=>navigation.navigate('Register')}/> 
      {/* "navigation is from the props from "const LoginScreen = ({navigation})" */}  
      {/*https://reactnavigation.org/docs/navigating/*/}  

    </View>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
  loginContainer:{
    flex: 1, 
    backgroundColor: '#1C2833',
    alignItems: 'center',
    justifyContent:'center',
  },
  inputStyle:{
    width:300,
  },
  textStyle:{
    color:'white',
  },
  button:{
    width:222,
    marginTop:10,
  }
 
})