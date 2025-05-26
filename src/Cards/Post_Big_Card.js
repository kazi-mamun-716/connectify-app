import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {AntDesign,FontAwesome} from 'react-native-vector-icons'
import { icons1 } from '../CommonCss/pagecss'

const Post_Big_Card = ({postId, userId, profileImage, userName, postImage, likes, comments}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);
    return (
    <View style={styles.container}>
        <View style={styles.cl}>
            <Image source={{uri: profileImage}} style={styles.profilePic}/>
            <Text style={styles.username}>{userName}</Text>
        </View>
        <Image source={{uri: postImage}} style={styles.postImage}/>
        <View style={styles.s2}>
            {isLiked ? <View style={styles.s21}>
                    <AntDesign onPress={()=>setIsLiked(false)} name="heart" size={24} color="red" style={styles.iconLiked}/>
                    <Text style={styles.noLiked}>{likes?.length+1}</Text>
                </View>:
                <View style={styles.s21}>
                    <AntDesign onPress={()=>setIsLiked(true)} name="hearto" color="black" size={24} style={styles.iconNotLiked} />
                    <Text style={styles.noLiked}>{likes?.length}</Text>
                </View>
            }
            <View style={styles.s22}>
                <FontAwesome name="comment" size={24} color="gray" style={icons1} onPress={()=>setShowComments(!showComments)}/>
            </View>
        </View>
        {showComments && (
            <View style={styles.s3}>
                {comments?.map((comment, index) => (
                    <Text key={index} style={{color: 'white', marginVertical: 5}}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>{comment.userName}: </Text>
                        {comment.commentText}
                    </Text>
                ))}
            </View>
        )}
    </View>
  )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // height: 500,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        overflow: 'hidden',
    },
    cl: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 5,
        backgroundColor: 'black',
    },
    profilePic:{
        width: 30,
        height: 30,
        borderRadius: 25,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    username: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        textTransform: 'capitalize',
    },
    postImage: {
        width: '100%',
        aspectRatio: 1,
    },
    s2:{
        width:'100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
    },
    s21:{
        // width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    noLiked:{
        color: 'gray',
        fontSize: 20,
        marginLeft: 5,
    },
    iconLiked: {
        color: 'red',
        marginLeft: 5,
    },
    iconNotLiked:{
        color: 'gray',
        marginLeft: 5,
    },
    s22:{
        flex: 1,
        alignItems: 'flex-end',
    },
    s3: {
        padding: 10,
        backgroundColor: 'black',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    },
})