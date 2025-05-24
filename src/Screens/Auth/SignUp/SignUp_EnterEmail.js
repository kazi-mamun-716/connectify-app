import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagecss';
import {MaterialIcons} from 'react-native-vector-icons';
import logo from '../../../../assets/logo.png';
import { formbtn, formHead2, formInput } from '../../../CommonCss/formCss';

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
      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Create a new account</Text>
      <TextInput placeholder='Enter Your Email' style={formInput} />
      <Text
        style={formbtn}
        onPress={() => navigation.navigate('SignUp_EnterVerificationCode')}
      >Next</Text>
    </View>
  )
}

export default SignUp_EnterEmail

const styles = StyleSheet.create({})