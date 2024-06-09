/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {screen} from '../../../object/screen';
import {sl} from '../../../style';
import {useNavigation} from '@react-navigation/native';
import {useLoginContext} from './loginProvider';
import {useFindByEmail} from '../../../controller/accountHolder/mutation';
export const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const login = useLoginContext();
  const {findEmailHandler} = useFindByEmail(userName);
  const successLogin = () => {
    findEmailHandler()
      .then(data => {
        login.updateState(data.data.findByEmail);
        navigation.navigate('auth_user' as never);
      })
      .catch(err => console.log(err));
  };
  const loginHandler = async () => {
    const formData = new FormData();
    formData.append('username', userName);
    formData.append('password', password);
    fetch('http://192.168.20.39:8080/login', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
      .then(data => {
        console.log(data);
        if (data.url.indexOf('success') != -1) {
          Alert.alert('Login successful');
          successLogin();
        } else {
          Alert.alert('Wrong credentials try again');
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'blue'} />
      <View style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/visitor/avatar.png')}
            />
          </View>
          <View>
            <Text style={styles.avatarLegend}>Login form</Text>
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImageIcon}
              source={require('../../../assets/visitor/icons/user.png')}
            />
            <TextInput
              value={userName}
              onChangeText={text => setUserName(text)}
              style={[{width: '85%'}, sl.textDark]}
              placeholderTextColor={'grey'}
              placeholder="Enter your email ..."
            />
          </View>

          <View style={styles.inputPasswordContainer}>
            <TouchableWithoutFeedback
              onPress={() => setHidePassword(!hidePassword)}>
              <Image
                style={styles.inputImageIcon}
                source={require('../../../assets/visitor/icons/hide.png')}
              />
            </TouchableWithoutFeedback>
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={hidePassword}
              style={styles.inputTxt}
              placeholderTextColor={'grey'}
              placeholder="Enter your Password ..."
            />
          </View>

          <View>
            <Text
              onPress={() => navigation.navigate('forgetPassword' as never)}
              style={styles.forgetPasswordTxt}>
              Forget Password?
            </Text>
          </View>

          <TouchableWithoutFeedback onPress={() => loginHandler()}>
            <View style={styles.loginBtb}>
              <Text style={styles.loginTxt}>Login</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  loginContainer: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 40,
    borderRadius: 10,
  },
  logoContainer: {
    backgroundColor: 'blue',
    height: screen.height / 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 23,
    borderBottomStartRadius: 23,
  },
  logo: {
    height: screen.height * 0.05,
    width: screen.height * 0.05,
  },
  logoView: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 10,
    borderWidth: 3,
  },
  avatar: {
    width: screen.width * 0.2,
    height: screen.width * 0.2,
    alignSelf: 'center',
  },
  avatarContainer: {
    width: screen.width * 0.3,
    height: screen.width * 0.3,
    transform: [{translateY: -(screen.height * 0.09)}],
    alignSelf: 'center',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    borderRadius: screen.width * 0.3,
  },
  textDescription: {
    fontFamily: 'fantasy',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19,
    padding: 12,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    width: '90%',
    alignSelf: 'center',
    padding: 2,
    borderRadius: 10,
  },
  inputPasswordContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    width: '90%',
    alignSelf: 'center',
    padding: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  inputImageIcon: {
    width: 40,
    height: 40,
  },
  inputTxt: {
    color: 'black',
    width: '85%',
  },
  forgetPasswordTxt: {
    display: 'flex',
    alignSelf: 'flex-end',
    color: 'black',
    marginRight: '7%',
    marginTop: 7,
    fontWeight: 'bold',
  },
  loginBtb: {
    borderColor: 'black',
    backgroundColor: 'green',
    width: screen.width * 0.9,
    alignSelf: 'center',
    marginTop: screen.height * 0.04,
    borderWidth: 2,
  },
  loginTxt: {
    alignSelf: 'center',
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    padding: 6,
  },
  avatarLegend: {
    color: 'black',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: (screen.width / screen.height) * 60,
    transform: [{translateY: -(screen.height / 2) * 0.1}],
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
