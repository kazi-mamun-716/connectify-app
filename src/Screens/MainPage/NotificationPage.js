import { StatusBar, StyleSheet, Text, View } from 'react-native';
import BottomNavBar from '../../Components/BottomNavBar'
import TopNavBar from '../../Components/TopNavBar'
import { formHead } from '../../CommonCss/formCss';

const NotificationPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation}/>
      <BottomNavBar navigation={navigation} page="NotificationPage"/>
      <View style={styles.c1}>
        <View style={styles.notification}>
          <Text style={styles.c1Text}>Notifications</Text>
        </View>
      </View>
    </View>
  )
}

export default NotificationPage

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'black',
    paddingVertical: 50,
  },
  c1: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  notification:{
    width: "95%",
    height: 50,
    backgroundColor: '#111111',
    marginTop: 20
  },
  c1Text:{}
})