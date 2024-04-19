/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {sl} from '../../../style';
import {screen} from '../../../object/screen';
import {useCampHistoryContext} from '../../../context/campHistoryContext';

export const HistoryDetail = (props: {
  open: boolean;
  arrIndex: number;
  children: ReactNode;
}) => {
  const {content} = useCampHistoryContext();
  console.log(content);

  return (
    <Modal transparent>
      <View
        style={[
          {
            backgroundColor: 'rgba(0, 0, 0, 0.692)',
            height: screen.height,
            width: screen.width,
          },
        ]}>
        {content != undefined &&
          content.responseContent != undefined &&
          content.responseContent.content != undefined &&
          content.responseContent.content.length != 0 && (
            <View
              style={[
                sl.bgWhite,
                sl.card,
                {
                  marginTop: screen.height / 2,
                  height: screen.height / 2,
                  flexWrap: 'wrap',
                },
              ]}>
              <View>{props.children}</View>
              <View
                style={[
                  {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: [{translateY: -80}],
                  },
                  sl.colSm12,
                ]}>
                <Image
                  source={{
                    uri: content.responseContent.content[props.arrIndex].levels
                      .photo,
                  }}
                  style={[
                    {width: 100, height: 100},
                    sl.bgWhite,
                    sl.border5,
                    sl.borderWhite,
                    sl.roundedCircle,
                  ]}
                />
              </View>
              <View style={[sl.row]}>
                <Text style={[sl.textDark, sl.display4, sl.fwBolder]}>
                  Title :
                </Text>
                <Text style={[sl.textDark, sl.display4]}>
                  {content.responseContent.content[props.arrIndex].camp.title}
                </Text>
              </View>
            </View>
          )}
      </View>
    </Modal>
  );
};
