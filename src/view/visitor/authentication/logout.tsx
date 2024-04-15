/* eslint-disable react/react-in-jsx-scope */
import {Modal, Text, View} from 'react-native';

export const Logout = () => {
  return (
    <Modal>
      <View>
        <Text>Are you sure you want to log out?</Text>
      </View>
    </Modal>
  );
};
