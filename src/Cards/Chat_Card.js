import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chat_Card = ({name, lastMessage, image, time}) => {
  return (
    <View style={styles.container}>
            <Image source={{uri: image}} style={styles.chat_profile_image}/>
        <View style={styles.c1}>
            <Text style={styles.chat_name}>{name}</Text>
            <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
    </View>
  )
}

export default Chat_Card

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#111111',
        marginTop: 10,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
    },
    chat_profile_image:{
        width: 30,
        height: 30,
        borderRadius: 25,
        marginRight: 10,
    },
    c1: {
        marginLeft: 10,
    },
    chat_name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
        opacity: 0.7,
    },
})