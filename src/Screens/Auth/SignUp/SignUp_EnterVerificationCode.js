import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from 'react-native-vector-icons';
import logo from '../../../../assets/logo.png';
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagecss'
import { formbtn, formHead3, formInput } from '../../../CommonCss/formCss'
import { Image } from 'react-native';

const SignUp_EnterVerificationCode = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp_EnterEmail')} style={goBack}>
        <MaterialIcons name="arrow-back" color="gray" size={24} />
        <Text style={{
          color: 'gray',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 5,
        }}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1} />
      <Text style={formHead3}>A verification code has been sent to your email</Text>
      <TextInput placeholder='Enter 6-digit code here' style={formInput} />
      <Text
        style={formbtn}
        onPress={() => navigation.navigate('SignUp_EnterUserName')}
      >Next</Text>
    </View>
  )
}

export default SignUp_EnterVerificationCode

const styles = StyleSheet.create({})