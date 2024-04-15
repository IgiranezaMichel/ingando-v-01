/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BookPreloader} from '../../../component/preloader';
import {BookLibraryContext} from '../../../context/bookLibraryContext';
import {ModalContext} from '../../../context/modalContext';
import {useBookPage} from '../../../controller/book/queries';
import {screen} from '../../../object/screen';
import {sl} from '../../../style';
import {ModalContextType} from '../../../types/modalContextType';
import {PageInput} from '../../../types/pageInput';
import {ResponseData} from '../../../types/responseData';
import {ReadBook} from './readBook';
export const BookLibrary = () => {
  const [page] = useState<PageInput>({
    pageNumber: 0,
    pageSize: 10,
    sort: 'id',
  });
  const [arrIndex, setArrIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const books = useBookPage(page, '45274380-edf2-434b-8c83-050130dcfe80');
  const data: ModalContextType = {
    isModalVisible: showModal,
    setIsModalVisible: isVisible => setShowModal(isVisible),
  };
  console.log(books);
  const bookData: ResponseData = {
    responseContent: books.response.responseContent,
    responseReady: books.response.responseReady,
  };
  return (
    <>
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
          Book Library
        </Text>
      </View>
      <View style={[sl.mRight, {position: 'absolute'}]}>
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
      </View>
      <View
        style={[
          sl.card,
          sl.colSm12,
          sl.rounded0,
          sl.row,
          sl.border,
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
      <ScrollView style={[{height: screen.height, width: '100%'}, sl.bgWhite]}>
        <ModalContext.Provider value={data}>
          <BookLibraryContext.Provider value={bookData}>
            {books.response.responseContent == undefined && <BookPreloader />}
            <View style={[sl.row, sl.colSm11_5, sl.mAuto, {flexWrap: 'wrap'}]}>
              {books.response.responseReady &&
                books.response.responseContent != undefined &&
                books.response.responseContent.content &&
                books.response.responseContent.content.length != 0 &&
                books.response.responseContent.content.map(
                  (data: any, index: number) => {
                    return (
                      <View
                        key={index}
                        style={[
                          sl.card,
                          sl.rounded0,
                          sl.p0,
                          sl.colSm6,
                          sl.border2,
                          sl.borderWhite,
                        ]}>
                        <Text style={[sl.textDark, {padding: 20}, sl.fwBolder]}>
                          {data.name}
                        </Text>
                        <Image
                          style={{width: '100%', height: 200}}
                          source={{
                            uri: data.cover,
                          }}
                        />
                        <View style={[sl.row, sl.mRight, sl.mt2]}>
                          <TouchableOpacity
                            style={[sl.bgPrimary, sl.mx3, sl.p1]}
                            onPress={() => {
                              setShowModal(true);
                              setArrIndex(index);
                            }}>
                            <Text style={[sl.textWhite, sl.display3]}>
                              Read
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  },
                )}
            </View>
            <ReadBook arrIndex={arrIndex} />
          </BookLibraryContext.Provider>
        </ModalContext.Provider>
      </ScrollView>
    </>
  );
};
