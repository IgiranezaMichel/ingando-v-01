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
} from 'react-native';
import {screen} from '../../../object/screen';
import {sl} from '../../../style';
import {useNavigation} from '@react-navigation/native';
export const ForgetPassword = () => {
  const navigation = useNavigation();
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
      <View style={styles.btnOptionsContainer}>
        <View>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/visitor/avatar.png')}
            />
          </View>
          <View>
            <Text style={styles.avatarLegend}>Forget Password</Text>
          </View>
          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your name ..."
          />

          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your gender ..."
          />
          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your phone number ..."
          />
          <Text
            onPress={() => navigation.navigate('login' as never)}
            style={[
              sl.textDark,
              sl.mRight,
              sl.textPrimary,
              sl.fwBolder,
              {marginRight: '12%', marginTop: 7},
            ]}>
            Login
          </Text>
          <TouchableWithoutFeedback>
            <View style={styles.signUpBtn}>
              <Text style={styles.signUpTxt}>Submit</Text>
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
  btnOptionsContainer: {
    backgroundColor: 'white',
    elevation: 10,
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logo: {
    height: screen.height * 0.05,
    width: screen.height * 0.05,
  },
  logoView: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 5,
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

  signUpBtn: {
    borderColor: 'black',
    backgroundColor: 'green',
    width: screen.width * 0.8,
    alignSelf: 'center',
    marginTop: screen.height * 0.03,
  },
  signUpTxt: {
    alignSelf: 'center',
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    padding: 6,
  },
  firstNameInput: {
    color: 'black',
    width: screen.width * 0.8,
    alignSelf: 'center',
  },
  avatarLegend: {
    color: 'black',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: (screen.width / screen.height) * 60,
    transform: [{translateY: -(screen.height / 2) * 0.1}],
  },
});
