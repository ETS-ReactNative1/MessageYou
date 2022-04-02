import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image} from "react-native-elements";

const RegisterScreen = ({navigate}) => {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const register =()=>{};

  return (
    <View style={styles.registerContainer}>

      <StatusBar style="light"/>

      <Text>register</Text>
      <Input  //Input field for the email. 
        placeholder='Username' type="username" 
        value={username} 
        onChangeText={(text) => setUsername(text)} 
      />
      <Input  //Input field for the email. 
        placeholder='Email' type="email" 
        value={email} 
        onChangeText={(text) => setEmail(text)} 
      />
      <Input  //Input field for the email. 
        placeholder='Password' type="password" 
        value={password} 
        secureTextEntry
        onChangeText={(text) => setPassword(text)} 
      />
      <Button containerStyle={styles.button} title="Register" type="solid" onPress={register}/> 

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({

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
  }
})