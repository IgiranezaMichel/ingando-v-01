/* eslint-disable eqeqeq */
import BottomModal from '../../../component/bottomModal';
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {sl} from '../../../style';
import {useCampContext} from '../../../context/campContext';
export const RegisterFormCamp = (props: {arrIndex: number}) => {
  const {content} = useCampContext();
  return (
    <BottomModal>
      {content.responseReady &&
        content.responseContent != undefined &&
        content.responseContent.content != undefined &&
        content.responseContent.content.length != 0 &&
        content.responseContent.content[props.arrIndex] && (
          <>
            <View>
              <Text style={[sl.textDark, sl.display3, sl.fwBolder]}>
                {content.responseContent.content[props.arrIndex].title}
              </Text>
            </View>
            <Text
              style={[
                sl.textSuccess,
                sl.textDark,
                sl.p0,
                sl.textJustify,
                sl.p1,
                sl.mb3,
              ]}>
              {content.responseContent.content[props.arrIndex].description}
            </Text>
            <View style={[sl.row, sl.colSm12, sl.border, sl.mAuto]}>
              <View
                style={[
                  sl.card,
                  sl.colSm6,
                  sl.m0,
                  sl.border1,
                  sl.rounded0,
                  {display: 'flex', justifyContent: 'center'},
                ]}>
                <Text style={[sl.textDark, sl.mb5]}>Total Cost</Text>
                <Text style={[sl.display2, sl.textDark, sl.fwBolder]}>
                {content.responseContent.content[props.arrIndex].cost} frw
                </Text>
              </View>
              <View style={[sl.colSm6]}>
                <View
                  style={[sl.card, sl.colSm12, sl.m0, sl.rounded0, sl.border1]}>
                  <Text style={[sl.textDark]}>Last</Text>
                  <Text style={[sl.display3, sl.textDark, sl.fwBolder]}>
                    12 weeks
                  </Text>
                  <Text style={[sl.textDark, sl.display5, sl.fwBolder]}>
                    07-april-2024 12-june-2024
                  </Text>
                </View>
                <View
                  style={[sl.card, sl.colSm12, sl.m0, sl.rounded0, sl.border1]}>
                  <Text style={[sl.textDark]}>Total Applicant</Text>
                  <Text style={[sl.display1, sl.textDark, sl.fwBolder]}>
                    102
                  </Text>
                </View>
              </View>
            </View>
            <View style={[sl.border1, sl.card, sl.colSm12, sl.rounded0]}>
              <Text style={[sl.textDark]}>Accepted ages</Text>
            </View>
            <View
              style={[
                sl.row,
                {justifyContent: 'flex-end', paddingBottom: '20%'},
                sl.colSm12,
                sl.rounded0,
              ]}>
              <TouchableOpacity style={[sl.bgSuccess]}>
                <Text style={[sl.fwBolder, sl.textWhite, sl.p3]}>Apply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[sl.bgPrimary, sl.p3, sl.mx1]}>
                <Text style={[sl.fwBolder, sl.textWhite]}>Apply for other</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
    </BottomModal>
  );
};
