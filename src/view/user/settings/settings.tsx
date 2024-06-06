/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {sl} from '../../../style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useState} from 'react';
import {BookPreloader} from '../../../component/preloader';
import {useUpdateAccountHolderPassword} from '../../../controller/accountHolder/mutation';
import {Popup} from '../../../component/popup';
import {useLoginContext} from '../../visitor/authentication/loginProvider';

export const Settings = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [response, setResponse] = useState({
    data: '',
    ready: false,
    open: false,
  });
  const {currentState} = useLoginContext();
  const [passwordDetail, setPasswordDetail] = useState({
    accountHolderEmail: '',
    oldPassword: '',
    newPassword: '',
    retypePassword: '',
  });
  useEffect(() => {
    if (currentState != undefined) {
      setPasswordDetail({
        ...passwordDetail,
        accountHolderEmail: currentState.email,
      });
    }
  }, [passwordDetail.accountHolderEmail]);
  const {updatePassword} = useUpdateAccountHolderPassword(
    passwordDetail.accountHolderEmail,
    passwordDetail.oldPassword,
    passwordDetail.newPassword,
  );
  const updatePasswordHandler = () => {
    if (passwordDetail.newPassword != passwordDetail.retypePassword) {
      setResponse({
        open: true,
        ready: true,
        data: 'Retyped password Dont match',
      });
    } else {
      updatePassword()
        .then(data => {
          const result = data.data.updateAccountHolderPassword as string;
          const responseData = result.substring(
            result.indexOf(',') + 1,
            result.lastIndexOf(','),
          );
          setResponse({
            open: true,
            ready: true,
            data: responseData,
          });
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <>
      {currentState === undefined && <BookPreloader />}
      {currentState != undefined && (
        <>
          <View style={[{backgroundColor: 'blue'}]}>
            <Image
              style={[
                {
                  width: 100,
                  height: 100,
                  transform: [{translateY: 40}],
                },
                sl.mAuto,
                sl.bgWhite,
                sl.roundedCircle,
              ]}
              source={{uri: currentState.profilePicture}}
            />
          </View>
          <ScrollView style={[sl.mt8]}>
            <SafeAreaView
              style={[
                {
                  marginTop: '10%',
                  justifyContent: 'center',
                  alignContent: 'center',
                },
              ]}>
              <View
                style={[
                  sl.card,
                  sl.colSm11,
                  sl.mAuto,
                  sl.rounded0,
                  sl.border1,
                ]}>
                <Image
                  style={[
                    {
                      width: 100,
                      height: 100,
                    },
                    sl.mAuto,
                    sl.bgWhite,
                    sl.roundedCircle,
                  ]}
                  source={require('../../../assets/visitor/avatar.png')}
                />
                <Text style={[sl.textDark, sl.fwBolder, sl.mb3, sl.mt3]}>
                  Name: {currentState.name}
                </Text>
                <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>
                  Ay Level:{' '}
                </Text>
                <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>Church </Text>
                <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>
                  Phone Number: {currentState.phoneNumber}
                </Text>
                <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>
                  Email: {currentState.email}
                </Text>
                <TextInput
                  style={[sl.textDark]}
                  underlineColorAndroid={'black'}
                  placeholderTextColor={'grey'}
                  secureTextEntry={true}
                  onChangeText={e =>
                    setPasswordDetail({...passwordDetail, oldPassword: e})
                  }
                  placeholder="Enter old password"
                />
                <TextInput
                  style={[sl.textDark]}
                  underlineColorAndroid={'black'}
                  placeholderTextColor={'grey'}
                  secureTextEntry={true}
                  onChangeText={e =>
                    setPasswordDetail({...passwordDetail, newPassword: e})
                  }
                  placeholder="Enter New password"
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderWidth: 2,
                    borderColor: 'grey',
                    width: '100%',
                    alignSelf: 'center',
                    padding: 1,
                    borderRadius: 10,
                    marginTop: 20,
                  }}>
                  <TouchableWithoutFeedback
                    onPress={() => setHidePassword(!hidePassword)}>
                    <Image
                      style={[{width: 40, height: 40}]}
                      source={require('../../../assets/visitor/icons/hide.png')}
                    />
                  </TouchableWithoutFeedback>
                  <TextInput
                    secureTextEntry={hidePassword}
                    style={[{color: 'black', width: '87%'}]}
                    placeholderTextColor={'grey'}
                    onChangeText={e =>
                      setPasswordDetail({...passwordDetail, retypePassword: e})
                    }
                    placeholder="Re-type password Password ..."
                  />
                </View>
                <TouchableOpacity
                  onPress={() => updatePasswordHandler()}
                  style={[sl.mRight, sl.p3, sl.bgPrimary, sl.mt4]}>
                  <Text style={[sl.textWhite, sl.fwBolder]}>
                    Change password
                  </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
            {response.open && response.ready && (
              <Popup open>
                <View style={[sl.card, sl.colSm10, sl.rounded0]}>
                  <Text style={[sl.textDark, sl.fwBolder]}>
                    {response.data}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setResponse({...response, open: false});
                    }}
                    style={[sl.mRight, sl.bgDanger, sl.mt8]}>
                    <Text style={[sl.fwBolder, sl.p2, sl.textWhite]}>
                      Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </Popup>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
};
