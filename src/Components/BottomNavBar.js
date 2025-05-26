import { View, Text, StyleSheet } from 'react-native'
import {Entypo, AntDesign, Ionicons, EvilIcons} from 'react-native-vector-icons';
import { icons1 } from '../CommonCss/pagecss';

const BottomNavBar = ({navigation, page}) => {
  return (
    <View style={styles.container}>
      {
        page === 'MainPage' ? 
        <Entypo name="home" color="#000" size={24} style={styles.activeIcons1} onPress={()=>navigation.navigate('MainPage')}/>
        : <Entypo name="home" color="#888" size={24} style={icons1} onPress={()=>navigation.navigate('MainPage')} />
      }
      {
        page === 'SearchUserPage' ? 
        <AntDesign name="search1" color="#000" size={24} style={styles.activeIcons1} onPress={()=>navigation.navigate('SearchUserPage')}/>
        : <AntDesign name="search1" color="#888" size={24} style={icons1} onPress={()=>navigation.navigate('SearchUserPage')} />
      }
      {
        page === 'NotificationPage' ? 
        <Ionicons name="notifications" color="#000" size={24} style={styles.activeIcons1} onPress={()=>navigation.navigate('NotificationPage')}/>
        : <Ionicons name="notifications" color="#888" size={24} style={icons1} onPress={()=>navigation.navigate('NotificationPage')} />
      }
      {
        page === 'UserProfilePage' ? 
        <EvilIcons name="user" color="#000" size={24} style={styles.activeIcons1} onPress={()=>navigation.navigate('UserProfilePage')}/>
        : <EvilIcons name="user" color="#888" size={24} style={icons1} onPress={()=>navigation.navigate('UserProfilePage')} />
      }
    </View>
  )
}

export default BottomNavBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111111',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    activeIcons1:{
        color: '#000',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
    }
})