import { View, Text, StyleSheet } from 'react-native'
import {Entypo, AntDesign, FontAwesome, EvilIcons} from 'react-native-vector-icons';
import { icons1 } from '../CommonCss/pagecss';

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <Entypo name="home" color="#000" size={24} style={icons1}/>
      <AntDesign name="search1" color="#000" size={24} style={icons1}/>
      <FontAwesome name="heartbeat" color="#000" size={24} style={icons1}/>
      <EvilIcons name="user" color="#000" size={24} style={icons1}/>
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
    },
})