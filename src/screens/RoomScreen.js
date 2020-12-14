import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export const RoomScreen = (props) => {
  const {chatRoom} = props;
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New Room Created',
      createdAt: new Date ().getTime(),
      system:true
    },
    {
      _id:1,
      text:'hello',
      createdAt: new Date().getTime(),
      user:{
        _id:2,
        name:'test user'
      }
    }
  ])

  const handleSend= (newMessage = [])=> {
    setMessages(GiftedChat.append(messages,newMessage))
  }
  return (
    // <View>
    //   <Text>{JSON.stringify(chatRoom)}</Text>
    // </View>
    <GiftedChat 
      messages = {messages}
      onSend = {newMessage => handleSend(newMessage)}
      user={{_id:1}}
    />
  );
};
