import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import ChatListItem from '../components/ChatListItem';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {Input, Button} from "react-native-elements"
import { db } from '../firebase';

//SafeAreView makes so that objects aren't cut-off in the edges of the device
//https://reactnative.dev/docs/scrollview
const ChatScreen = ({navigation}) => {
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


  return (
    <SafeAreaView>  
      <ScrollView> 
        {chats.map(({id,data: {chatName}}) =>(
          <ChatListItem key={id} id={id} chatName={chatName}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  button:{
    width:100,
    alignContent:'center',
    alignItems:'center',
  }
})