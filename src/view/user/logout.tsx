/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Modal, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useLogoutModal} from '../../context/logoutContext';
import {sl} from '../../style';
import {screen} from '../../object/screen';

export const Logout = () => {
  const {setShowLogoutModal, showLogoutModal} = useLogoutModal();
  return (
    <Modal visible={showLogoutModal} transparent={true} animationType="slide">
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.944)',
          height: screen.height,
        }}>
        <View
          style={[
            {
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              height: screen.height,
            },
          ]}>
          <StatusBar backgroundColor={'white'} />
          <View style={[sl.card, sl.colSm11, sl.mAuto, sl.rounded0]}>
            <Text style={[sl.textDark]}>Are you sure you want to log out?</Text>
            <View style={[sl.row, sl.mRight, sl.mt8]}>
              <TouchableOpacity
                onPress={() => setShowLogoutModal(false)}
                style={[sl.bgDanger, sl.p2, sl.mx2]}>
                <Text style={[sl.textWhite, sl.fwBolder]}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[sl.bgSuccess, sl.p2, sl.mx2]}>
                <Text style={[sl.textWhite, sl.fwBolder]}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
