import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { containerFull, goBack } from '../../../CommonCss/pagecss';
import {MaterialIcons} from 'react-native-vector-icons';

const SignUp_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goBack}>
        <MaterialIcons name="arrow-back" color="gray" size={24} />
        <Text style={{
          color: 'gray',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 5,
        }}>Go Back</Text>
      </TouchableOpacity>
      <Text>SignUp_EnterEmail</Text>
    </View>
  )
}

export default SignUp_EnterEmail

const styles = StyleSheet.create({})