import { StatusBar, StyleSheet, Text, View } from 'react-native'
import {Ionicons} from 'react-native-vector-icons'
import TopNavBar from '../Components/TopNavBar'
import BottomNavBar from '../Components/BottomNavBar'
import { formHead } from '../CommonCss/formCss'

const Setting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Ionicons name="chevron-back-circle-outline" color="#fff" size={24} style={styles.goHomeIcon} onPress={()=>navigation.navigate("UserProfilePage")}/>
      {/* <TopNavBar navigation={navigation} page="Setting" /> */}
      <BottomNavBar navigation={navigation} page="Setting" />
      <Text style={formHead}>Settings</Text>

      <Text style={styles.text}>Edit Profile</Text>
      <Text style={styles.text}>Change Password</Text>
      <Text style={styles.text}>Customer Support</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: 'black',
        paddingVertical: 50,
  },
  text:{
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    paddingBottom: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  }
})