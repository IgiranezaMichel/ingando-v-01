/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Modal, ScrollView, Text, View} from 'react-native';
import {screen} from '../../../object/screen';
import {sl} from '../../../style';
import {ReactNode} from 'react';

export const ApplicationForm = (props: {
  open: boolean;
  children: ReactNode;
}) => {
  return (
    <Modal visible={props.open} transparent>
      <ScrollView>
        <View
          style={{
            height: screen.height,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.737)',
          }}>
          <View
            style={[
              sl.card,
              sl.rounded0,
              sl.colSm11,
              sl.mAuto,
              sl.p0,
              {flexWrap: 'wrap'},
            ]}>
            <Text
              style={[
                sl.textDark,
                sl.fwBolder,
                sl.card,
                sl.rounded0,
                sl.colSm12,
              ]}>
              Add payment mode used
            </Text>
            {props.children}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
