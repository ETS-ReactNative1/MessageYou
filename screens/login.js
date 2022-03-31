import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input} from "react-native-elements";
import { StatusBar } from 'expo-status-bar'; //https://docs.expo.dev/versions/latest/sdk/status-bar/


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  return (
    <View style={styles.LoginView}>

      <Input //Input field for the email. 
      placeholder='Email' type="email" 
      value={email} onChangeText={(text) => setEmail(text)} />

      <Input //Input field for the password. 
      placeholder='Password' type="password" 
      secureTextEntry //Makes that the password shows in hidden black dots
      value={password} onChangeText={(password) => setPassword(password)}/>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    LoginView:{
        
    },
})