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
import {useState} from 'react';

export const Settings = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
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
          source={require('../../../assets/visitor/avatar.png')}
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
            style={[sl.card, sl.colSm11, sl.mAuto, sl.rounded0, sl.border1]}>
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
            <Text style={[sl.textDark, sl.fwBolder, sl.mb3, sl.mt3]}>Name</Text>
            <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>Ay Level </Text>
            <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>Church </Text>
            <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>Phone Number</Text>
            <Text style={[sl.textDark, sl.fwBolder, sl.mb3]}>Email</Text>
            <TextInput
              style={[sl.textDark]}
              underlineColorAndroid={'black'}
              placeholderTextColor={'grey'}
              secureTextEntry={true}
              placeholder="Enter old password"
            />
            <TextInput
              style={[sl.textDark]}
              underlineColorAndroid={'black'}
              placeholderTextColor={'grey'}
              secureTextEntry={true}
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
                placeholder="Re-type password Password ..."
              />
            </View>
            <TouchableOpacity style={[sl.mRight, sl.p3, sl.bgPrimary, sl.mt4]}>
              <Text style={[sl.textWhite, sl.fwBolder]}>Change password</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
