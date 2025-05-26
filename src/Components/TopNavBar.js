import { View, Text, Image } from 'react-native'
import logo from '../../assets/logo.png';
import { StyleSheet } from 'react-native';
import { icons1, logo2 } from '../CommonCss/pagecss';
import {Ionicons} from 'react-native-vector-icons';

const TopNavBar = ({navigation, page}) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo2}/>
      {
        page === "Main Page" && <Ionicons name="chatbubble-ellipses-outline" color="#000" size={24} style={icons1} onPress={()=>navigation.navigate("ALLChats")}/>
      }
    </View>
  )
}

export default TopNavBar;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        top: 0,
        position: 'absolute',
        backgroundColor: '#111111',
        paddingRight:10
    }
})