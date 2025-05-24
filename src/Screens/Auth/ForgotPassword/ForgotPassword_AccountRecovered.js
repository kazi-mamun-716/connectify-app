import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from 'react-native-vector-icons';
import logo from '../../../../assets/logo.png';
import { containerFull, goBack, logo1, row } from '../../../CommonCss/pagecss'
import { formbtn, formHead2 } from '../../../CommonCss/formCss'
import { Image } from 'react-native';

const ForgotPassword_AccountRecovered = ({navigation}) => {
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
      <View style={row}>
        <MaterialIcons name="check-circle" color="green" size={30} />
        <Text style={[formHead2, {marginLeft: 10}]}>Account Recoverd Successfully</Text>
      </View>      
      <Text
        style={formbtn}
        onPress={() => navigation.navigate('Login')}
      >Let's Roll</Text>
    </View>
  )
}

export default ForgotPassword_AccountRecovered

const styles = StyleSheet.create({})