import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagecss';
import {MaterialIcons} from 'react-native-vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead3, formInput } from '../../../CommonCss/formCss';

const ForgotPassword_EnterVerification = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword_EnterEmail')} style={goBack}>
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
        onPress={() => navigation.navigate('ForgotPassword_ChoosePassword')}
      >Next</Text>
    </View>
  )
}

export default ForgotPassword_EnterVerification

const styles = StyleSheet.create({})