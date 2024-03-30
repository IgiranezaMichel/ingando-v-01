import React, {useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  PanResponder,
  Switch,
} from 'react-native';
import {sl} from '../style';

const BottomSheet = ({visible, onClose}) => {
  const [sheetHeight, setSheetHeight] = useState(300);
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
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={[styles.sheetContainer, {height: sheetHeight}]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.handle} {...panResponder.panHandlers}>
            <View style={styles.handleIndicator} />
          </View>
          <View style={styles.content}>
            <Text style={[sl.textDark]}>
              This is your bottom sheet content.
            </Text>
            <Text style={[sl.textDark]}>
              This is your bottom sheet content.
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const BottomModal = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleBottomSheet} style={styles.button}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>
      <BottomSheet visible={bottomSheetVisible} onClose={toggleBottomSheet} />
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
