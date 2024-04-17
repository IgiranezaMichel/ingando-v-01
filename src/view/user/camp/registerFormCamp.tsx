/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import BottomModal from '../../../component/bottomModal';
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {sl} from '../../../style';
import {useCampContext} from '../../../context/campContext';
import {useCampApplication} from '../../../controller/campApplicant/mutation';
import {CampApplicantInput} from '../../../types/CampApplicantInput';
import {useAccountHolderContext} from '../../../context/accountHolderContext';
import {CampApplicantStatus} from '../../../enum/campApplicationStatus';
import {ApplicationForm} from './applicationForm';
export const RegisterFormCamp = (props: {arrIndex: number}) => {
  const {content} = useCampContext();
  const [showApplyingModal, setShowApplyingModal] = useState(false);
  const {responseContent, responseReady} = useAccountHolderContext();
  const [campApplication, setCampApplication] = useState<CampApplicantInput>({
    accountHolderId: responseContent.id,
    campApplicantStatus: CampApplicantStatus.APPENDING,
    campId: '',
    comment: '',
    id: '',
    paymentCode: '',
    telephone: '',
  });
  useEffect(() => {
    if (responseReady && responseContent != undefined) {
      setCampApplication({
        ...campApplication,
        accountHolderId: responseContent.id,
      });
    }
  }, []);
  const {saveCampApplication} = useCampApplication(campApplication);
  const saveApplicationHandler = () => {
    saveCampApplication().then(data => console.log(data));
  };
  return (
    <>
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
                    style={[
                      sl.card,
                      sl.colSm12,
                      sl.m0,
                      sl.rounded0,
                      sl.border1,
                    ]}>
                    <Text style={[sl.textDark]}>Last</Text>
                    <Text style={[sl.display3, sl.textDark, sl.fwBolder]}>
                      12 weeks
                    </Text>
                    <Text style={[sl.textDark, sl.display5, sl.fwBolder]}>
                      07-april-2024 12-june-2024
                    </Text>
                  </View>
                  <View
                    style={[
                      sl.card,
                      sl.colSm12,
                      sl.m0,
                      sl.rounded0,
                      sl.border1,
                    ]}>
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
                <TouchableOpacity
                  style={[sl.bgSuccess, sl.mt3]}
                  onPress={() => setShowApplyingModal(true)}>
                  <Text style={[sl.fwBolder, sl.textWhite, sl.p3, sl.p4]}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
      </BottomModal>

      {/* application form */}
      <ApplicationForm open={showApplyingModal}>
        <View style={[sl.row, sl.colSm12, {flexWrap: 'wrap'}, sl.p3]}>
          <Text style={[sl.textDark, sl.fwBolder]}>Camp Title </Text>
          <Text style={[sl.textDark]}>
            {content.responseContent.content[props.arrIndex].title}
          </Text>
        </View>
        <View style={[sl.p4]}>
          <TextInput
            placeholder="Enter method used"
            underlineColorAndroid={'black'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            placeholder="Enter phone Number"
            underlineColorAndroid={'black'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            placeholder="Enter Payment code"
            underlineColorAndroid={'black'}
            placeholderTextColor={'grey'}
          />
          <View style={[sl.row, sl.mRight]}>
            <TouchableOpacity
              style={[sl.bgDanger, sl.my2, sl.p2]}
              onPress={() => setShowApplyingModal(false)}>
              <Text style={[sl.textWhite, sl.fwBolder, sl.mx2, sl.my2]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => saveApplicationHandler()}
              style={[sl.bgSuccess, sl.p2]}>
              <Text style={[sl.textWhite, sl.fwBolder, sl.mx2, sl.my2]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ApplicationForm>
    </>
  );
};
