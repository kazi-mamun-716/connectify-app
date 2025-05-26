import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: user?.profileImage}} style={styles.userImage}/>
      <Text style={styles.userName}>{user.username}</Text>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#111111',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginBottom: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
})