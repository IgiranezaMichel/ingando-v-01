/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {sl} from '../../../style';
import {useLogoutModal} from '../../../context/logoutContext';

export const Exam = () => {
  const {setShowLogoutModal} = useLogoutModal();
  return (
    <>
      <View style={[{backgroundColor: 'blue'}]}>
        <Text
          style={[
            sl.display3,
            sl.fwBolder,
            sl.textWhite,
            sl.mAuto,
            sl.mt6,
            sl.p3,
          ]}>
          Exam History
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setShowLogoutModal(true)}
        style={[sl.mRight, {position: 'absolute'}]}>
        <Image
          style={[
            {
              width: 40,
              height: 40,
              zIndex: 1,
              backgroundColor: 'red',
            },
            sl.roundedCircle,
          ]}
          source={require('../../../assets/power-off.png')}
        />
      </TouchableOpacity>
      <View
        style={[
          sl.card,
          sl.colSm12,
          sl.rounded0,
          sl.row,
          {justifyContent: 'flex-end', alignItems: 'center'},
        ]}>
        <Text style={[sl.textDark]}>Page 1 out of 1</Text>
        <TouchableOpacity style={[sl.border, sl.mx1, sl.p1]}>
          <Text style={[sl.textDark, sl.fwBolder]}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[sl.border, sl.mx1]}>
          <Text style={[sl.textDark, sl.fwBolder, sl.p1]}>Next</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={[sl.card, sl.rounded0, sl.mt2, sl.colSm11_5, sl.mAuto]}>
          <Text style={[sl.textDark, sl.fwBolder, sl.display3]}>Header</Text>
          <Text style={[sl.textDark, sl.mt2]}>Level</Text>
          <View style={[sl.row]}>
            <Text style={[sl.textDark]}>Status</Text>
            <Text style={[sl.textDark, sl.mx4]}>Camp Name</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
