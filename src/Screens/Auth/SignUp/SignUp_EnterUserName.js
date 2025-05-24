import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from 'react-native-vector-icons';
import logo from '../../../../assets/logo.png';
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagecss'
import { formbtn, formHead2, formInput } from '../../../CommonCss/formCss'
import { Image } from 'react-native';

const SignUp_EnterUserName = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp_EnterVerificationCode')} style={goBack}>
        <MaterialIcons name="arrow-back" color="gray" size={24} />
        <Text style={{
          color: 'gray',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 5,
        }}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Choose a Username</Text>
      <TextInput placeholder='Enter a username' style={formInput} />
      <Text
        style={formbtn}
        onPress={() => navigation.navigate('SignUp_EnterPassword')}
      >Next</Text>
    </View>
  )
}

export default SignUp_EnterUserName

const styles = StyleSheet.create({})