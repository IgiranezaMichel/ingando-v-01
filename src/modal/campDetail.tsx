/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useModalContext} from '../context/modalContext';
import {sl} from '../style';
import LottieView from 'lottie-react-native';
import {TimeLine} from '../component/timeline';
import {screen} from '../object/screen';

export const CampDetailModal = () => {
  const {isModalVisible, setIsModalVisible} = useModalContext();
  return (
    <Modal
      animationType="slide"
      visible={isModalVisible}
      style={[sl.bgPrimary]}>
      <StatusBar hidden />
      <ScrollView
        style={[{display: 'flex', height: screen.height}, sl.bgPrimary]}>
        <View
          style={[
            {
              display: 'flex',
              justifyContent: 'center',
              height: screen.height,
              marginBottom: '25%',
            },
          ]}>
          <View style={[sl.card, sl.p0, sl.rounded0, sl.mAuto, sl.colSm11]}>
            <View style={[sl.borderBottom, sl.p2]}>
              <View style={[sl.row, sl.spaceBtn]}>
                <View>
                  <View>
                    <Text style={[sl.fwBolder, sl.textPrimary]}>Camp name</Text>
                  </View>
                  <View style={[sl.row]}>
                    <LottieView
                      autoPlay={true}
                      source={require('../assets/lotties/location.json')}
                      style={{width: 30, height: 30}}
                    />
                    <Text style={[sl.fwBolder, sl.textDark]}>Location</Text>
                  </View>
                </View>
                <View>
                  <Text style={[sl.fwBolder, sl.textPrimary]}>Deadline</Text>
                </View>
              </View>
            </View>
            <Text style={[sl.textDark, sl.p1]}>
              Description and setting the height dynamically based on the
              device's window height, we achieve similar behavior to using
            </Text>
            <TimeLine
              headerTxt="Week of prayer"
              headerStyle={[sl.fwBolder, sl.textDark]}>
              <Text style={[sl.textPrimary]}>
                Description and setting the height dynamically based on the
                device's window height, we achieve similar behavior to using
              </Text>
            </TimeLine>
          </View>
          <View style={[sl.row, sl.colSm11, sl.mAuto]}>
            <View style={[sl.card, sl.colSm6, sl.m0, sl.rounded0]}>
              <Text style={[sl.textDark]}>Total Cost</Text>
              <Text style={[sl.display1, sl.textDark, sl.fwBolder]}>
                12 frw
              </Text>
            </View>
            <View style={[sl.colSm6]}>
              <View style={[sl.card, sl.colSm12, sl.m0, sl.rounded0]}>
                <Text style={[sl.textDark]}>Last</Text>
                <Text style={[sl.display3, sl.textDark, sl.fwBolder]}>
                  12 weeks
                </Text>
                <Text style={[sl.textDark, sl.display5]}>
                  monday-12-2024 -thursday-12-2024
                </Text>
              </View>
              <View style={[sl.card, sl.colSm12, sl.m0, sl.rounded0]}>
                <Text style={[sl.textDark]}>Total Applicant</Text>
                <Text style={[sl.display1, sl.textDark, sl.fwBolder]}>12</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setIsModalVisible(false);
        }}
        style={[
          {
            width: 70,
            height: 70,
            borderBottomStartRadius: 100,
          },
          sl.bgWhite,
          {
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 1,
            borderLeftColor: 'black',
            borderLeftWidth: 5,
            borderBottomColor: 'black',
            borderBottomWidth: 5,
          },
        ]}>
        <Text
          style={[
            sl.display2,
            sl.fwBolder,
            sl.textDark,
            sl.p5,
            {transform: [{translateX: 10}, {translateY: -10}]},
          ]}>
          x
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};
