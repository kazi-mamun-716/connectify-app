import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from 'react-native-vector-icons';
import logo from '../../../../assets/logo.png';
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagecss'
import { formbtn, formHead2, formInput } from '../../../CommonCss/formCss'
import { Image } from 'react-native';

const ForgotPassword_ChoosePassword = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword_EnterVerification')} style={goBack}>
        <MaterialIcons name="arrow-back" color="gray" size={24} />
        <Text style={{
          color: 'gray',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 5,
        }}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Create New Password</Text>
      <TextInput placeholder='Enter password' style={formInput} secureTextEntry/>
      <TextInput placeholder='confirm password' style={formInput} secureTextEntry/>
      <Text
        style={formbtn}
        onPress={() => navigation.navigate('ForgotPassword_AccountRecovered')}
      >Next</Text>
    </View>
  )
}

export default ForgotPassword_ChoosePassword

const styles = StyleSheet.create({})