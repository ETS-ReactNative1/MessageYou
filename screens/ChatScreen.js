/* 
Author: Dmytro Kavetskyy
ChatScreen is the Unique screen for every chat, where unique messages will be displayed and
there is a functionality to send messages in the bottom of the screen.
*/

import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, ImageBackground} from 'react-native';
import React, {useLayoutEffect, useState} from 'react'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import flowers from '../assets/background/flowers.png'; //https://pixabay.com/vectors/flowers-pattern-spring-green-4032775/
import pink from '../assets/background/pink.jpg';
import halloween from '../assets/background/halloween.jpg'; // https://pixabay.com/illustrations/halloween-ghost-pumpkin-bat-skull-5596921/

const ChatScreen = ({navigation, route}) => {

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  //to customize each header for each Chat uniquely. we can use LayourEffect from navigation to pass 
  // the unique id and make the headers unique
  useLayoutEffect(() => {
    navigation.setOptions({ 
      title:<Text>{route.params.chatName}</Text> //This is for the Header to display the Chat's Name
    });
  }, [navigation,messages])

  useLayoutEffect(() => {
    const unsuscribe = db
    .collection('chats')
    .doc(route.params.id)
    .collection('messages')
    .orderBy('createdAt','asc')
    .onSnapshot((snapshot) => setMessages(
      snapshot.docs.map((doc) =>({
        id: doc.id,
        data: doc.data()
      }))
    ));
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

  return (
    <ImageBackground style={styles.backgroundImages} source={halloween}>
    <SafeAreaView style={styles.chatContainer}>
      <ScrollView contentContainerStyle={styles.chatContainerWithin}>
     

      {messages.map(({id,data}) =>
      data.email === auth.currentUser.email ?(
        <View key={id} style={styles.receiver}>
          <Text style={styles.messageText}>
            {data.message}
          </Text>
        </View>):
        (<View key={id} style={styles.sender}>
        <Text style={styles.messageText}>
            {data.message}
          </Text>
      </View>))}

      </ScrollView>

      <View style={styles.messageBox}>
        <TextInput 
        style={styles.textContainer} 
        placeholder='Message' 
        value={input} 
        onSubmitEditing={sendMessage}
        onChangeText={(text)=>setInput(text)}
        />
        <TouchableOpacity onPress={sendMessage}> 
          {/*https://reactnativeelements.com/docs/1.2.0/icon*/}
          <Icon reverse name="sc-telegram" type='evilicon' color='#517fa4'/>
        </TouchableOpacity>
      </View>
  
    </SafeAreaView>
  </ImageBackground>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  backgroundImages: {
    flex: 1,
    height:"auto",
    justifyContent: "center",
    position:'relative'
  },
  chatContainer:{
    flex:1,
  },
  chatContainerWithin:{
  },
  messageBox:{
    padding:9,
    flexDirection:"row",
    backgroundColor:'white',
    marginBottom:1,
    alignItems:"center"
  },
  textContainer:{
    position:'relative',
    height:40,
    flex:1,
    marginRight:15,
    color:"black",
    borderRadius:35,
    padding:10,
    backgroundColor:'lightblue'
  },
  receiver:{
    padding: 14,
    alignSelf: "flex-end",
    marginRight:15,
    marginTop:15,
    marginBottom:20,
    position:'relative',
    backgroundColor: "lightgreen",
    borderRadius: 25,
  },
  sender:{
    padding: 15,
		backgroundColor: "cyan",
		alignSelf: "flex-start",
		borderRadius: 20,
		margin: 15,
    borderRadius: 25,
  },
  messageText:{
    color:'black',
    fontWeight:'bold'
  },
})