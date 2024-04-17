/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ReactNode} from 'react';
import {Modal, StatusBar, View} from 'react-native';
import {screen} from '../object/screen';

export const Popup = (props: {children: ReactNode; open: boolean}) => {
  return (
    <Modal visible={props.open} transparent>
      <StatusBar backgroundColor={'rgba(199, 195, 191, 0.979)'} />
      <View
        style={[
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: screen.height,
            backgroundColor: 'rgba(199, 195, 191, 0.579)',
          },
        ]}>
        {props.children}
      </View>
    </Modal>
  );
};
