/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import LottieView from 'lottie-react-native';
import {
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {useCampContext} from '../../../context/campContext';
import {useModalContext} from '../../../context/modalContext';
import {screen} from '../../../object/screen';
import {sl} from '../../../style';

export const CampDetailModal = (props: {arrIndex: number}) => {
  const {isModalVisible, setIsModalVisible} = useModalContext();
  const {content} = useCampContext();
  return (
    <Modal animationType="slide" visible={isModalVisible} transparent>
      <StatusBar hidden />
      {content.responseReady &&
        content.responseContent != undefined &&
        content.responseContent.content != undefined &&
        content.responseContent.content.length != 0 &&
        content.responseContent.content[props.arrIndex] && (
          <View style={[{display: 'flex', height: screen.height}, sl.bgWhite]}>
            <ScrollView>
              <View
                style={[
                  {
                    display: 'flex',
                    justifyContent: 'center',
                    height: screen.height,
                  },
                ]}>
                <StatusBar backgroundColor={'white'} animated />
                <View
                  style={[sl.card, sl.p0, sl.rounded0, sl.mAuto, sl.colSm11]}>
                  <View style={[sl.borderBottom, sl.p2]}>
                    <View style={[sl.row, sl.spaceBtn]}>
                      <View>
                        <View>
                          <Text style={[sl.fwBolder, sl.textPrimary]}>
                            {
                              content.responseContent.content[props.arrIndex]
                                .title
                            }
                          </Text>
                        </View>
                        <View style={[sl.row]}>
                          <LottieView
                            autoPlay={true}
                            source={require('../../../assets/lotties/location.json')}
                            style={{width: 30, height: 30}}
                          />
                          <Text style={[sl.fwBolder, sl.textDark]}>
                            {
                              content.responseContent.content[props.arrIndex]
                                .address
                            }
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={[sl.fwBolder, sl.textPrimary]}>
                          {
                            content.responseContent.content[props.arrIndex]
                              .endingDate
                          }
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text style={[sl.textDark, sl.p1]}>
                    {
                      content.responseContent.content[props.arrIndex]
                        .description
                    }
                  </Text>
                  {/* <TimeLine
                    headerTxt="Week of prayer"
                    headerStyle={[sl.fwBolder, sl.textDark]}>
                    <Text style={[sl.textPrimary]}>
                      Description and setting the height dynamically based on
                      the device's window height, we achieve similar behavior to
                      using
                    </Text>
                  </TimeLine> */}
                  <RenderHTML
                    contentWidth={screen.width}
                    source={{
                      html:
                        "<div style='color:black'>" +
                        content.responseContent.content[props.arrIndex]
                          .content +
                        '</div>',
                    }}
                  />
                </View>
                <View style={[sl.row, sl.colSm11, sl.mAuto]}>
                  <View
                    style={[
                      sl.card,
                      sl.colSm6,
                      sl.m0,
                      sl.rounded0,
                      sl.bgWhite,
                      {display: 'flex', justifyContent: 'center'},
                    ]}>
                    <Text style={[sl.textDark]}>Total Cost</Text>
                    <Text style={[sl.display2, sl.textDark, sl.fwBolder]}>
                      {content.responseContent.content[props.arrIndex].cost} frw
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
                      <Text style={[sl.display1, sl.textDark, sl.fwBolder]}>
                        12
                      </Text>
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
          </View>
        )}
    </Modal>
  );
};
