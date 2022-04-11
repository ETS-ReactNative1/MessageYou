import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app';

const ChatScreen = ({navigation, route}) => {

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  //to customize each header for each Chat uniquely. we can use LayourEffect from navigation to pass 
  // the unique id and make the headers unique
  useLayoutEffect(() => {
    const unsuscribe = db
    .collection('chats')
    .doc(route.params.id)
    .collection('messages')
    .orderBy('createdAt','desc')
    .onSnapshot((snapshot) => setMessages(
      snapshot.docs.map((doc) =>({
        id: doc.id,
        data: doc.data()
      }))
    ))
    navigation.setOptions({ 
      title:<Text>{route.params.chatName}</Text> //This is for the Header to display the Chat's Name
    });

   return unsuscribe;
  }, [route])

  const sendMessage = ()=> { //We are getting the message and sending the info to the Firebase unique Chat
    db.collection('chats').doc(route.params.id) 
    .collection('messages').add({ 
      message:input,
      email: auth.currentUser.email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("")
  };

  const displayChats = ()=>{
    
  };

  return (
    <SafeAreaView style={styles.chatContainer}>

      <ScrollView>
        {messages}
      </ScrollView>

      <View style={styles.messageBox}>
        <TextInput 
        style={styles.textContainer} 
        placeholder='Message' 
        value={input} 
        onChangeText={(text)=>setInput(text)}/>

        <TouchableOpacity onPress={sendMessage}> 
          {/*https://reactnativeelements.com/docs/1.2.0/icon*/}
          <Icon reverse name="sc-telegram" type='evilicon' color='#517fa4'/>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  chatContainer:{
    flex:1,
    backgroundColor:'lightyellow'

  },
  messageBox:{
    padding:13,
    flexDirection:"row",
    backgroundColor:'white',
    marginBottom:1,
    alignItems:"center"
  },
  textContainer:{
    bottom:0,
    height:40,
    flex:1,
    marginRight:15,
    color:"black",
    borderRadius:35,
    padding:10,
    backgroundColor:'lightblue'
  },
})