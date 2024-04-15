/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import LottieView from 'lottie-react-native';
import {Modal, StatusBar, View} from 'react-native';
import {screen} from '../object/screen';
import {sl} from '../style';

export const BookPreloader = () => {
  return (
    <Modal visible={true}>
      <StatusBar backgroundColor={'white'} />
      <View
        style={[
          {
            zIndex: 1,
            height: screen.height,
            width: screen.width,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          sl.bgWhite,
        ]}>
        <LottieView
          autoPlay
          speed={10}
          style={[{width: 100, height: 100}]}
          source={require('.././assets/lotties/book.json')}
        />
      </View>
    </Modal>
  );
};
