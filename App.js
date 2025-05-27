import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Screens/Auth/Login/Login';
import SignUp_EnterEmail from './src/Screens/Auth/SignUp/SignUp_EnterEmail';
import SignUp_EnterPassword from './src/Screens/Auth/SignUp/SignUp_EnterPassword';
import SignUp_EnterUserName from './src/Screens/Auth/SignUp/SignUp_EnterUserName';
import SignUp_AccountCreated from './src/Screens/Auth/SignUp/SignUp_AccountCreated';
import SignUp_EnterVerificationCode from './src/Screens/Auth/SignUp/SignUp_EnterVerificationCode';
import ForgotPassword_AccountRecovered from './src/Screens/Auth/ForgotPassword/ForgotPassword_AccountRecovered';
import ForgotPassword_ChoosePassword from './src/Screens/Auth/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_EnterEmail from './src/Screens/Auth/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerification from './src/Screens/Auth/ForgotPassword/ForgotPassword_EnterVerification';
import MainPage from './src/Screens/MainPage/MainPage';
import ALLChats from './src/Screens/ChatSection/ALLChats';
import SearchUserPage from './src/Screens/MainPage/SearchUserPage';
import NotificationPage from './src/Screens/MainPage/NotificationPage';
import UserProfilePage from './src/Screens/Profile/UserProfilePage';
import Setting from './src/Screens/Setting';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right',
      }}>
        <Stack.Screen options={{
          animation: 'slide_from_right',
        }} name="Login" component={Login} /> 
        <Stack.Screen name="SignUp_EnterEmail" component={SignUp_EnterEmail} />
        <Stack.Screen name="SignUp_EnterPassword" component={SignUp_EnterPassword} />
        <Stack.Screen name="SignUp_EnterUserName" component={SignUp_EnterUserName} />
        <Stack.Screen name="SignUp_AccountCreated" component={SignUp_AccountCreated} />
        <Stack.Screen name="SignUp_EnterVerificationCode" component={SignUp_EnterVerificationCode} />

        <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
        <Stack.Screen name="ForgotPassword_EnterVerification" component={ForgotPassword_EnterVerification} />

        <Stack.Screen name="MainPage" component={MainPage} /> 
        <Stack.Screen name="Setting" component={Setting} /> 
        <Stack.Screen name="ALLChats" component={ALLChats} options={{animation: 'slide_from_left'}}/> 
        <Stack.Screen name="SearchUserPage" component={SearchUserPage} options={{animation: 'slide_from_bottom'}}/> 
        <Stack.Screen name="NotificationPage" component={NotificationPage} options={{animation: 'slide_from_left'}}/> 
        <Stack.Screen name="UserProfilePage" component={UserProfilePage} options={{animation: 'slide_from_right'}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
