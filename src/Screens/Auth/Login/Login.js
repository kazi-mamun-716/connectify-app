import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import logo from '../../../../assets/logo.png';
import { containerFull, hr80, logo1 } from '../../../CommonCss/pagecss';
import { formbtn, formHead, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/formCss';

const Login = ({navigation}) => {
  return (
    <View style={containerFull}>
      <Image style={logo1} source={logo} />
      <Text style={formHead}>Login Here</Text>
      <TextInput placeholder='Enter Your Email' style={formInput}/>
      <TextInput placeholder='Enter Your Password' style={formInput} secureTextEntry/>
      <Text 
        style={formTextLinkRight}
        onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}
      >Forgot Password?</Text>
      <Text 
        style={formbtn}
        onPress={() => navigation.navigate('MainPage')}
      >Submit</Text>
      <View style={hr80} /> 
      <Text style={formTextLinkCenter}>Don't have an account? 
        <Text 
          style={{color: 'white'}}
          onPress={() => navigation.navigate('SignUp_EnterEmail')}
        > Sign Up</Text>
      </Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})