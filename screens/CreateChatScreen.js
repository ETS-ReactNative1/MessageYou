/* 
Author: Dmytro Kavetskyy
CreateChatScreen is the is the Screen where Logged IN Users can create new Chats, with the only 
option to choose a Chat name
*/

import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import {Input, Button} from "react-native-elements"
import { db } from '../firebase';


const CreateChatScreen = ({navigation}) => {
  const[name,setName] =useState("");

  const createChat = async () =>{
    await db.collection('chats').add({
      chatName: name
    }).then(()=> {navigation.goBack()}
    ).catch((error)=>alert(error));
  };

  return (
    <View style={styles.inputContainer}>

      <Input //Username input
        placeholder='Enter a Chat Name' 
        value={name} 
        onChangeText={(text) => setName(text)} 
      />
      <Button containerStyle={styles.button} title="Create Chat" onPress={createChat}/>

    </View>
  )
}

export default CreateChatScreen

const styles = StyleSheet.create({
  inputContainer:{
    flex: 1, 
    alignItems: 'center',
    justifyContent:'center',
    padding:10,
  },
  button:{
    width:215,

  },
})