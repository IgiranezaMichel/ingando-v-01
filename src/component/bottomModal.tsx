import React, {FC, ReactNode, useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  PanResponder,
  ScrollView,
} from 'react-native';
import {useBottomContext} from '../context/bottomModalContext';
import {screen} from '../object/screen';
type Sheet = {
  visible: any;
  onClose: any;
  children: ReactNode;
};
const BottomSheet: FC<Sheet> = props => {
  const [sheetHeight, setSheetHeight] = useState(screen.height / 2);
  const [isDragging, setIsDragging] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsDragging(true);
    },
    onPanResponderMove: (event, gestureState) => {
      if (isDragging) {
        const newHeight = sheetHeight + gestureState.dy;
        if (newHeight >= 150) {
          setSheetHeight(newHeight);
        }
      }
    },
    onPanResponderRelease: () => {
      setIsDragging(false);
    },
    onPanResponderTerminate: () => {
      setIsDragging(false);
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}>
      <View style={styles.modalContainer}>
        <View style={[styles.sheetContainer, {height: sheetHeight}]}>
          <TouchableOpacity
            onPress={props.onClose}
            style={[styles.closeButton]}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.handle} {...panResponder.panHandlers}>
            <View style={styles.handleIndicator} />
          </View>
          <ScrollView style={styles.content}>{props.children}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};
type BottomItemValues = {
  children: ReactNode;
};
const BottomModal: FC<BottomItemValues> = props => {
  const {isModalVisible, setIsModalVisible} = useBottomContext();

  const toggleBottomSheet = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <BottomSheet visible={isModalVisible} onClose={toggleBottomSheet}>
        {props.children}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sheetContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  handle: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  handleIndicator: {
    width: 40,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  content: {
    paddingVertical: 20,
  },
});

export default BottomModal;
