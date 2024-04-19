/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {sl} from '../../../style';
import {useLogoutModal} from '../../../context/logoutContext';
import {useDisplayCampHistoryPage} from '../../../controller/campApplicant/query';
import {useState} from 'react';
import {PageInput} from '../../../types/pageInput';
import {useAccountHolderContext} from '../../../context/accountHolderContext';
import {HistoryDetail} from './historyDetail';
import {DataListApi} from '../../../types/dataListApi';
import {CampHistoryContext} from '../../../context/campHistoryContext';

export const History = () => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {setShowLogoutModal} = useLogoutModal();
  const [page] = useState<PageInput>({
    pageNumber: 0,
    pageSize: 10,
    sort: 'id',
  });
  const {responseContent} = useAccountHolderContext();
  const {response} = useDisplayCampHistoryPage(page, responseContent.email);
  const data: DataListApi = {
    content: response,
    updateContent() {
      response.refresh();
    },
  };
  return (
    <CampHistoryContext.Provider value={data}>
      <View style={[{backgroundColor: 'blue'}]}>
        <Text
          style={[
            sl.display3,
            sl.fwBolder,
            sl.textWhite,
            sl.mAuto,
            sl.mt6,
            sl.p3,
          ]}>
          Camp History
        </Text>
      </View>
      {/* logout */}
      <TouchableOpacity
        onPress={() => setShowLogoutModal(true)}
        style={[sl.mRight, {position: 'absolute'}]}>
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
      <View
        style={[
          sl.card,
          sl.colSm12,
          sl.rounded0,
          sl.row,
          {justifyContent: 'flex-end', alignItems: 'center'},
        ]}>
        <Text style={[sl.textDark]}>Page 1 out of 1</Text>
        <TouchableOpacity style={[sl.border, sl.mx1, sl.p1]}>
          <Text style={[sl.textDark, sl.fwBolder]}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[sl.border, sl.mx1]}>
          <Text style={[sl.textDark, sl.fwBolder, sl.p1]}>Next</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {response.responseReady &&
          response.responseContent != undefined &&
          response.responseContent.content != undefined &&
          response.responseContent.content.length != 0 &&
          response.responseContent.content.map((data: any, index: number) => {
            return (
              <View
                key={data.id}
                style={[sl.card, sl.rounded0, sl.mt2, sl.colSm11_5, sl.mAuto]}>
                <Text style={[sl.textDark, sl.fwBolder, sl.display4]}>
                  {data.camp.title}
                </Text>
                <Text style={[sl.textDark]}>Ay level :{data.levels.name}</Text>
                <Text style={[sl.textPrimary]}>
                  status :{data.campApplicantStatus}
                </Text>
                <View style={[sl.row]}>
                  <Text style={[sl.textDark]}>
                    Location:{data.camp.location}
                  </Text>
                  <Text style={[sl.textDark, sl.mx4]}>
                    Cost: {data.camp.cost}
                  </Text>
                </View>
                <Text
                  onPress={() => {
                    setSelectedIndex(index);
                    setOpenDetailModal(true);
                  }}
                  style={[sl.textDark, sl.mRight, sl.fwBolder]}>
                  Detail
                </Text>
              </View>
            );
          })}
        {openDetailModal && (
          <HistoryDetail arrIndex={selectedIndex} open={openDetailModal}>
            <View style={[sl.colSm12]}>
              <Text>x</Text>
            </View>
          </HistoryDetail>
        )}
      </ScrollView>
    </CampHistoryContext.Provider>
  );
};
