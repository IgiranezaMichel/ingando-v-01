/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BookPreloader} from '../../../component/preloader';
import {BottomContext} from '../../../context/bottomModalContext';
import {CampContext} from '../../../context/campContext';
import {useLogoutModal} from '../../../context/logoutContext';
import {useModalContext} from '../../../context/modalContext';
import {useActiveCamp} from '../../../controller/camp/query';
import {screen} from '../../../object/screen';
import {sl} from '../../../style';
import {DataListApi} from '../../../types/dataListApi';
import {ModalContextType} from '../../../types/modalContextType';
import {PageInput} from '../../../types/pageInput';
import {CampDetailModal} from './campDetail';
import {RegisterFormCamp} from './registerFormCamp';

export const Home = () => {
  const {setIsModalVisible} = useModalContext();
  const [showBottomModal, setShowBottomModal] = useState(false);
  const toggleBottomSheet = () => {
    setShow('application');
    setShowBottomModal(!showBottomModal);
  };
  const modalProps: ModalContextType = {
    isModalVisible: showBottomModal,
    setIsModalVisible: isVisible => setShowBottomModal(isVisible),
  };
  const [page] = useState<PageInput>({
    pageNumber: 0,
    pageSize: 10,
    sort: 'id',
  });
  const {response, refetch} = useActiveCamp(page);
  const data: DataListApi = {
    content: response,
    updateContent() {
      refetch();
    },
  };
  const {setShowLogoutModal} = useLogoutModal();
  const [arrIndex, setArrIndex] = useState(0);
  const [show, setShow] = useState('');
  useEffect(() => {}, [arrIndex]);
  return (
    <BottomContext.Provider value={modalProps}>
      <CampContext.Provider value={data}>
        {response.responseReady && response.responseContent == undefined && (
          <BookPreloader />
        )}
        <View style={[styles.container]}>
          <View style={styles.subLogoContainer}>
            <Image
              style={styles.logo}
              source={require('../../../assets/logo.png')}
            />
          </View>
          <View style={[sl.mRight, {position: 'absolute'}]}>
            <TouchableOpacity onPress={() => setShowLogoutModal(true)}>
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
          </View>
          <ScrollView>
            {response.responseReady &&
              response.responseContent != undefined &&
              response.responseContent.content != undefined &&
              response.responseContent.content.length != 0 &&
              response.responseContent.content.map(
                (data: any, index: number) => {
                  return (
                    <View
                      key={index}
                      style={[
                        sl.colSm11_5,
                        sl.card,
                        sl.mAuto,
                        sl.p1,
                        sl.rounded0,
                        sl.border,
                        sl.mt2,
                      ]}>
                      <View style={[sl.row]}>
                        <View style={[sl.colSm10, sl.p0]}>
                          <Text
                            style={[
                              sl.textSuccess,
                              sl.textDark,
                              sl.fwBolder,
                              sl.mb4,
                              sl.description,
                            ]}>
                            {data.title}
                          </Text>
                          <Text
                            style={[
                              sl.textSuccess,
                              sl.textDark,
                              sl.p0,
                              sl.textJustify,
                              sl.p1,
                            ]}>
                            {data.description}
                          </Text>
                        </View>
                        <View
                          style={[
                            {
                              display: 'flex',
                              justifyContent: 'space-between',
                              flexDirection: 'column',
                              borderLeftWidth: 2,
                            },
                            sl.mAuto,
                          ]}>
                          <TouchableOpacity
                            style={[sl.p2]}
                            onPress={() => {
                              setIsModalVisible(true);
                              setShow('campDetail');
                              setArrIndex(index);
                            }}>
                            <LottieView
                              autoPlay={true}
                              loop={false}
                              style={[
                                {width: 50, height: 50},
                                sl.mAuto,
                                sl.bgSuccess,
                              ]}
                              source={require('../../../assets/lotties/detail.json')}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[sl.p2]}
                            onPress={toggleBottomSheet}>
                            <View style={[sl.mAuto, sl.bgPrimary]}>
                              <LottieView
                                autoPlay={true}
                                style={[{width: 50, height: 50}]}
                                source={require('../../../assets/lotties/edit.json')}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View
                        style={[
                          sl.row,
                          sl.spaceBtn,
                          sl.card,
                          sl.p1,
                          sl.rounded0,
                        ]}>
                        <View>
                          <Text style={[sl.fwBolder, sl.textDark]}>Frw </Text>
                          <Text style={[sl.fwBolder, sl.textPrimary]}>
                            {data.cost}
                          </Text>
                        </View>
                        <View style={[sl.row]}>
                          <View style={[sl.p0]}>
                            <LottieView
                              autoPlay={true}
                              source={require('../../../assets/lotties/location.json')}
                              style={[{width: 40, height: 40}]}
                            />
                          </View>
                          <View
                            style={[
                              {
                                display: 'flex',
                                alignContent: 'center',
                                justifyContent: 'center',
                              },
                            ]}>
                            <Text
                              style={[sl.fwBolder, sl.textDark, sl.rounded0]}>
                              {data.address}
                            </Text>
                          </View>
                        </View>
                        <View style={[sl.row]}>
                          <View style={[]}>
                            <LottieView
                              autoPlay={true}
                              source={require('../../../assets/lotties/deadline.json')}
                              style={{width: 40, height: 40}}
                            />
                          </View>
                          <View
                            style={[
                              {
                                display: 'flex',
                                alignContent: 'center',
                                justifyContent: 'center',
                              },
                            ]}>
                            <Text style={[sl.fwBolder, sl.textDark]}>
                              {data.endingDate}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                },
              )}
            {response.responseReady &&
              response.responseContent != undefined &&
              response.responseContent.content != undefined &&
              response.responseContent.content.length == 0 && (
                <View style={[sl.card, sl.bgPrimary, sl.rounded0]}>
                  <Text style={[sl.textCenter, sl.textWhite, sl.fwBolder]}>
                    No data found
                  </Text>
                </View>
              )}
          </ScrollView>
        </View>
        {show == 'campDetail' && <CampDetailModal arrIndex={arrIndex} />}
        {show == 'application' && <RegisterFormCamp arrIndex={arrIndex} />}
      </CampContext.Provider>
    </BottomContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: screen.height,
    width: screen.width,
  },
  subLogoContainer: {
    backgroundColor: 'blue',
    height:
      screen.height > screen.width ? screen.height * 0.16 : screen.width * 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  logo: {
    maxHeight:
      screen.height > screen.width ? screen.height * 0.07 : screen.width * 0.1,
    maxWidth:
      screen.height > screen.width ? screen.height * 0.07 : screen.width * 0.1,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 20,
  },
});
