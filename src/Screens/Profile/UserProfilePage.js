import { StatusBar, StyleSheet, Text, View } from 'react-native';
import BottomNavBar from '../../Components/BottomNavBar'
import TopNavBar from '../../Components/TopNavBar'
import { formHead } from '../../CommonCss/formCss';

const UserProfilePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation}/>
      <BottomNavBar navigation={navigation} page="UserProfilePage"/>
      <Text style={formHead}>Profile Page</Text>
    </View>
  )
}

export default UserProfilePage

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'black',
    paddingVertical: 50,
  }
})