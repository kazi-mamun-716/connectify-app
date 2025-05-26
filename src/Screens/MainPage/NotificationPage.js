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
      <Text style={formHead}>Notification Page</Text>
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
  }
})