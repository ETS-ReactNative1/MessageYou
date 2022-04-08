import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import ChatListItem from '../components/ChatListItem';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button} from "react-native-elements"
import { db } from '../firebase';

//SafeAreView makes so that objects aren't cut-off in the edges of the device
//https://reactnative.dev/docs/scrollview
const ChatHomeScreen = ({navigation}) => {
  const [chats,setChats] = useState([]);

  useEffect(()=>{
    const unsuscribe= db.collection('chats').onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc)=>({
          id: doc.id,
          data: doc.data(),
      }))
      )
  )
  return unsuscribe;
},[])

  useLayoutEffect(() => {
    navigation.setOptions({
      title:'MessageYou',
      headerRight:()=> (
          <TouchableOpacity>
          <Button containerStyle={styles.button} title="Add Chat"
          onPress={()=>navigation.navigate('CreateChat')}/> 
          </TouchableOpacity>
      ),
    });
  }, [navigation]);

  //joinChat makes it so the chats are clickable and you can enter the converstion
  const joinChat = (id, chatName) =>{
    navigation.navigate("Chat", { id, chatName });
  }

  return (
    <SafeAreaView>  
      <ScrollView> 
        {chats.map(({id,data: {chatName}}) =>(
          <ChatListItem key={id} id={id} chatName={chatName} joinChat={joinChat}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChatHomeScreen

const styles = StyleSheet.create({
  button:{
    width:100,
    alignContent:'center',
    alignItems:'center',
  }
})