/* 
Author: Dmytro Kavetskyy
ChatHomeScreen is the General Screen that will display all of the created Chats. This Screen contains a SignOut Button, 
a round button to create new Chats, and the ability to join chats by clicking on them.
*/
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import ChatListItem from '../components/ChatListItem';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button} from "react-native-elements"
import { db , auth} from '../firebase';

const ChatHomeScreen = ({navigation}) => {
  const [chats,setChats] = useState([]);

  //This is simply the header that stays fixed in every screen. Notice we pass the "navigation" at the end
  useLayoutEffect(() => {
    navigation.setOptions({
      title:'MessageYou',
      headerRight:()=> (
          <TouchableOpacity>
          <Button containerStyle={styles.button} title="Sign Out"
          onPress={signOut}/> 
          </TouchableOpacity>
      ),
    });
  }, [navigation]);

  //Simple Signout function in the top right
  const signOut = () => {
		auth.signOut().then(() => navigation.replace("Login"));

	};
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

  //joinChat makes it so the chats are clickable and you can enter the unique Chat because of the unique id and chatName
  const joinChat = (id, chatName) =>{
    navigation.navigate("Chat", { id, chatName });
  }
  return (
    //SafeAreView makes so that objects aren't cut-off in the edges of the device
    //https://reactnative.dev/docs/scrollview
    <View style={styles.viewContainer}>
    <SafeAreaView>  
      <ScrollView> {/*Displays all of the Chats from "ChatListItem" to the Home Screen, which are clickable*/}   
        {chats.map(({id,data: {chatName}}) =>(
          <ChatListItem key={id} id={id} chatName={chatName} joinChat={joinChat}/>
        ))}
      </ScrollView>
    </SafeAreaView>

    <TouchableOpacity // This is the ADD CHAT Button Bottom Right. It always stays there
      containerStyle={styles.roundButton} 
      title="Add Chat"
      onPress={()=>navigation.navigate('CreateChat')}
      >
        <Text style={styles.addText}>NEW CHAT</Text>
    </TouchableOpacity>

  </View>
  )
}

export default ChatHomeScreen

const styles = StyleSheet.create({
  button:{
    width:100,
    alignContent:'center',
    alignItems:'center',
  },
  addText:{
    color:'white',
    fontSize:17,
    fontWeight:'bold'
  },
  viewContainer:{
    flex:1,
  },
  roundButton: {
    position: "absolute",
    bottom:85,
    right: 20,
    width:100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    borderRadius:55,
    backgroundColor: '#1E90FF',
  },
})