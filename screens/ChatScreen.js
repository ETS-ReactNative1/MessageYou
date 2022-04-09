import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'

const ChatScreen = ({navigation, route}) => {

  //to customize each header for each Chat uniquely. we can use LayourEffect from navigation to pass 
  // the unique id and make the headers unique
  useLayoutEffect(() => {
    navigation.setOptions({
      title:<Text>{route.params.chatName}</Text> //route.params.chatName gets the chatName from the actual chat id
    })
  }, [])

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})