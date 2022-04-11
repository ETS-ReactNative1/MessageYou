import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar'
import { Button, Input} from "react-native-elements";
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const register =()=>{
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser) => {
      authUser.user.updateProfile({
        displayName: username,
      });
    })
    .catch((error)=>alert("Please verify that each field is correct"));
  };

  //What useLayoutEffect does is it executes right before the screen loads
  useLayoutEffect( ()=>{
    navigation.setOptions({
      // headerBackImageSource: {uri:'../assets/logo.png'},
      headerBackTitle:"Return",
      // headerTitleStyle:{ color:"white"}
    })
  },[navigation])

  return (
    <View style={styles.registerContainer}>

      <StatusBar style="light"/>

      <Text style={styles.topText}>
        Create a MessageYou Account
      </Text>

      <Input style={styles.textStyle} //Username input
        placeholder='Username' type="username" 
        value={username} 
        onChangeText={(text) => setUsername(text)} 
      />
      <Input style={styles.textStyle}//Email input
        placeholder='Email' type="email" 
        value={email} 
        onChangeText={(text) => setEmail(text)} 
      />
      <Input style={styles.textStyle} //Password Input
        placeholder='Password' type="password" 
        value={password} 
        secureTextEntry
        onChangeText={(text) => setPassword(text)} 
      />
      <Button containerStyle={styles.button} title="Register" type="solid" onPress={register}/> 
      <Button containerStyle={styles.button} title="Return to Login" type="outline" onPress={()=>navigation.goBack()}/> 

    </View>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  topText:{
    fontSize:20,
    marginBottom:25,
    color:'white'
  },
  registerContainer:{
    flex: 1, 
    backgroundColor: '#1C2833',
    alignItems: 'center',
    justifyContent:'center',
    padding:10,
  },
  button:{
    width:222,
    marginTop:11,
  },
  textStyle:{
    color:'white',
  },
})