/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {Image, Modal, ScrollView, Text, View} from 'react-native';
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
              <ScrollView>
                <View style={[sl.mb2, sl.card, sl.colSm12, sl.rounded0]}>
                  <View style={[sl.row, sl.mb2, sl.rounded0]}>
                    <Text style={[sl.textDark, sl.display4, sl.fwBolder]}>
                      Title :
                    </Text>
                    <Text style={[sl.textDark, sl.display4]}>
                      {
                        content.responseContent.content[props.arrIndex].camp
                          .title
                      }
                    </Text>
                  </View>
                  <View
                    style={[sl.row, sl.mb2, sl.rounded0, {flexWrap: 'wrap'}]}>
                    <Text style={[sl.textDark, sl.display4, sl.fwBolder]}>
                      Location :
                    </Text>
                    <Text style={[sl.textDark, sl.display4]}>
                      {
                        content.responseContent.content[props.arrIndex].camp
                          .location
                      }
                    </Text>
                    {/*  */}
                    <View style={[sl.row, sl.mb2, sl.rounded0]}>
                      <Text style={[sl.textDark, sl.display4, sl.fwBolder]}>
                        {'  '} cost :
                      </Text>
                      <Text style={[sl.textDark, sl.display4]}>
                        {
                          content.responseContent.content[props.arrIndex].camp
                            .cost
                        }
                      </Text>
                    </View>
                  </View>
                  <Text style={[sl.mb2, sl.textDark]}>
                    Status :{' '}
                    {
                      content.responseContent.content[props.arrIndex]
                        .campApplicantStatus
                    }
                  </Text>
                  <Text style={[sl.textDark, sl.display4]}>
                    {
                      content.responseContent.content[props.arrIndex].camp
                        .description
                    }
                  </Text>
                </View>
                <View style={[sl.row, sl.mb2]}>
                  <Text style={[sl.textDark, sl.display4, sl.fwBolder]}>
                    Ay Level :
                  </Text>
                  <Text style={[sl.textDark, sl.display4]}>
                    {
                      content.responseContent.content[props.arrIndex].levels
                        .name
                    }
                  </Text>
                </View>
                <View style={[sl.row]}>
                  <Text style={[sl.textDark, sl.display4, sl.fwBolder]}>
                    Age Range :
                  </Text>
                  <Text style={[sl.textDark, sl.display4]}>
                    {
                      content.responseContent.content[props.arrIndex].levels
                        .fromAge
                    }{' '}
                    -{' '}
                    {
                      content.responseContent.content[props.arrIndex].levels
                        .toAge
                    }{' '}
                    years old
                  </Text>
                </View>
                <View style={[{marginBottom: '20%'}]}>
                  <Text
                    style={[sl.textShadow, sl.fwBolder, sl.textDark, sl.mt2]}>
                    Payment
                  </Text>
                  <Text style={[sl.fwBolder, sl.textDark, sl.mt2]}>
                    Phone number{' :'}
                    {content.responseContent.content[props.arrIndex].telephone}
                  </Text>
                  <Text style={[sl.fwBolder, sl.textDark, sl.mt2]}>
                    Payment code{' :'}
                    {
                      content.responseContent.content[props.arrIndex]
                        .paymentCode
                    }
                  </Text>
                  <Text style={[sl.fwBolder, sl.textDark, sl.mt2]}>
                    Applied on{' :'}
                    {content.responseContent.content[props.arrIndex].timeStamp}
                  </Text>
                </View>
              </ScrollView>
            </View>
          )}
      </View>
    </Modal>
  );
};
