/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
import {Modal, ScrollView, StatusBar, Text, View} from 'react-native';
import {sl} from '../../../style';
import {useModalContext} from '../../../context/modalContext';
import {useBookLibraryContext} from '../../../context/bookLibraryContext';
import {useEffect, useState} from 'react';
import {screen} from '../../../object/screen';
export const ReadBook = (props: {arrIndex: number}) => {
  const {isModalVisible, setIsModalVisible} = useModalContext();
  const {responseContent} = useBookLibraryContext();
  const [bookData, setBookData] = useState<any>({});
  useEffect(() => {
    if (responseContent && responseContent.content != undefined) {
      setBookData(responseContent.content[props.arrIndex]);
    }
  }, [responseContent, props.arrIndex, bookData]);
  return (
    <Modal
      visible={isModalVisible}
      style={[sl.border0, sl.bgWhite, sl.card, sl.rounded0]}
      transparent
      animationType="slide">
      <StatusBar backgroundColor={'white'} />
      <Text
        style={[
          sl.textDark,
          {position: 'absolute', zIndex: 1},
          sl.fwBolder,
          sl.p2,
          sl.bgMuted,
          sl.mRight,
        ]}
        onPress={() => setIsModalVisible(false)}>
        close
      </Text>
      {bookData != undefined && (
        <ScrollView style={[sl.card, sl.border]}>
          <View style={[sl.card, sl.rounded0]}>
            <Text style={[sl.textDark]}>BookName {bookData.name}</Text>
            <Text style={[sl.textDark]}>Author: {bookData.author}</Text>
          </View>
        </ScrollView>
      )}
    </Modal>
  );
};
