/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {useModalContext} from '../../context/modalContext';
import {sl} from '../../style';
import {screen} from '../../object/screen';
import {CampDetailModal} from '../../modal/campDetail';
import {RegisterFormCamp} from './camp/registerFormCamp';
import {BottomContext} from '../../context/bottomModalContext';
import {ModalContextType} from '../../types/modalContextType';
import {useCampContext} from '../../context/campContext';
import {DataListApi} from '../../types/dataListApi';
import {useActiveCamp} from '../../controller/camp/query';
import {PageInput} from '../../types/pageInput';

export const Home = () => {
  const {setIsModalVisible} = useModalContext();
  const [showBottomModal, setShowBottomModal] = useState(false);
  const toggleBottomSheet = () => {
    setShowBottomModal(!showBottomModal);
  };
  const modalProps: ModalContextType = {
    isModalVisible: showBottomModal,
    setIsModalVisible: isVisible => setShowBottomModal(isVisible),
  };
  const [page, setPage] = useState<PageInput>({
    pageNumber: 0,
    pageSize: 10,
    sort: 'id',
  });
  const {response,refetch} = useActiveCamp(page);
  console.log(response)
  // const data: DataListApi = {
  //   content: response,
  //   updateContent() {
  //     refetch();
  //   },
  // };
  return (
    <BottomContext.Provider value={modalProps}>
      <RegisterFormCamp />
      <View style={[styles.container]}>
        <View style={styles.subLogoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <ScrollView>
          <View style={[sl.colSm11_5, sl.card, sl.mAuto, sl.p1, sl.rounded0]}>
            <View style={[sl.row]}>
              <View style={[sl.colSm10, sl.p0]}>
                <Text style={[sl.textSuccess, sl.textDark, sl.fwBolder, sl.p6]}>
                  Header
                </Text>
                <Text
                  style={[
                    sl.textSuccess,
                    sl.textDark,
                    sl.p0,
                    sl.textJustify,
                    sl.p1,
                  ]}>
                  In React Native, you typically use flex for layout, and it
                  doesn't directly support units like
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
                  }}>
                  <LottieView
                    autoPlay={true}
                    loop={false}
                    style={[{width: 50, height: 50}, sl.mAuto, sl.bgSuccess]}
                    source={require('../../assets/lotties/detail.json')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={[sl.p2]} onPress={toggleBottomSheet}>
                  <View style={[sl.mAuto, sl.bgPrimary]}>
                    <LottieView
                      autoPlay={true}
                      style={[{width: 50, height: 50}]}
                      source={require('../../assets/lotties/edit.json')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[sl.row, sl.spaceBtn]}>
              <View style={[sl.row]}>
                <Text style={[sl.fwBolder, sl.textDark]}>Frw </Text>
                <Text style={[sl.fwBolder, sl.textPrimary]}>450</Text>
              </View>
              <View style={[sl.row]}>
                <LottieView
                  autoPlay={true}
                  source={require('../../assets/lotties/location.json')}
                  style={{width: 30, height: 30}}
                />
                <Text style={[sl.fwBolder, sl.textDark]}>Location</Text>
              </View>
              <View style={[sl.row]}>
                <LottieView
                  autoPlay={true}
                  source={require('../../assets/lotties/deadline.json')}
                  style={{width: 30, height: 30}}
                />
                <Text style={[sl.fwBolder, sl.textDark]}>Location</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <LottieView
          autoPlay={true}
          source={require('../../assets/Lottie.json')}
          style={{width: 100, height: 100}}
        />
      </View>
      <CampDetailModal />
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
