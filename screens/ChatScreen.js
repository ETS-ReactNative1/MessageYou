import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth, db } from '../firebase'


const ChatScreen = ({navigation, route}) => {

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  //to customize each header for each Chat uniquely. we can use LayourEffect from navigation to pass 
  // the unique id and make the headers unique
  useLayoutEffect(() => {
    navigation.setOptions({
      title:<Text>{route.params.chatName}</Text> //route.params.chatName gets the chatName from the actual chat id
    })
  }, [])

  const sendMessage = ()=> { //We are getting the message and sending the info to the Firebase unique Chat
    db.collection('chats').doc(route.params.id) 
    .collection('messages').add({ 
      message:input,
      email: auth.currentUser.email,
    })

    setInput('')
  };

  return (
    <SafeAreaView style={styles.chatContainer}>

      <ScrollView>
        
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