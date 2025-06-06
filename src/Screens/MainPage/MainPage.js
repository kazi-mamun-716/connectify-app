import { StatusBar, StyleSheet, Text, View } from 'react-native';
import BottomNavBar from '../../Components/BottomNavBar'
import TopNavBar from '../../Components/TopNavBar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page="Main Page"/>
      <FollowersRandomPost />
      <BottomNavBar navigation={navigation} page="MainPage"/>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'black',
    paddingVertical: 50,
  }
})