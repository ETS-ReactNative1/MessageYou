import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import { auth, db } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

//SafeAreView makes so that objects aren't cut-off in the edges of the device
//https://reactnative.dev/docs/scrollview
const ChatScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title:'MessageYou',
      headerRight:()=> (
        <View style={{flexDirection:'row', width:80, marginRight:25}}>
          <TouchableOpacity onPress={()=> navigation.navigate("CreateChat")}>

          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);


  return (
    <SafeAreaView>  
      <ScrollView> 
        <ChatListItem/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  
})