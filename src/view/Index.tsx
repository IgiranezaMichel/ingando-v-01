/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
} from 'react-native';
import { screen } from '../object/screen';
import { useNavigation } from '@react-navigation/native';
import { sl } from '../style';
import LottieView from 'lottie-react-native';
export const Index = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'blue'} />
            <View style={styles.logoContainer}>
                <View style={[sl.card,sl.roundedCircle,sl.dFlex,sl.justifyContentCenter,sl.alignItemCenter,{paddingLeft:30,paddingRight:30}]}>
                <Image
                    style={styles.logo}
                    source={require('../../src/assets/visitor/download.png')}
                />
                </View>
                <Text style={[styles.textDescription,sl.textShadow,sl.textWhite]}>
                        Welcome to Adventist Youth App
                </Text>
                <Text style={[sl.textWhite]}>
                        This system is designed to help adventist Youth
                </Text>
            </View>
            <View style={styles.btnOptionsContainer}>
                <View>
                <LottieView
                            autoPlay={true}
                            source={require('../assets/lotties/down.json')}
                            style={[sl.mAuto,{width: 90, height: 90}]}
                          />
                    <Text style={[sl.textCenter,sl.textWhite,sl.fwBolder]}>
                        CLick button below to login 
                    </Text>
                    <TouchableWithoutFeedback onPress={() => {navigation.navigate('login' as never);}}>
                        <View style={[styles.loginBtn,sl.mt8,sl.rounded1]}>
                            <Text style={styles.loginTxt}>Login</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(240, 248, 255, 0.667)',
    },
    btnOptionsContainer: {
        transform: [{ translateY: -(screen.height / 1.6) * 0.27 }],
        marginLeft: screen.width * 0.07,
        marginRight: screen.width * 0.07,
        paddingTop: 30,
        paddingBottom: 40,
        borderRadius: 10,
    },
    logoContainer: {
        backgroundColor: 'blue',
        height: screen.height /1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    logo: {
        height: 80,
        width: 60,
    },
    textDescription: {
        fontFamily: 'fantasy',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 19,
        padding: 12,
    },
    loginBtn: {
        borderColor: 'black',
        backgroundColor: 'green',
        width: screen.width * 0.3,
        alignSelf: 'center',
    },
    ingando: {
        alignSelf: 'center',
        padding: screen.height * 0.03,
    },
    loginTxt: {
        alignSelf: 'center',
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
        padding: 6,
    },
    signUpBtn: {
        borderColor: 'black',
        backgroundColor: 'green',
        width: screen.width * 0.8,
        alignSelf: 'center',
        marginTop: screen.height * 0.03,
    },
    signUpTxt: {
        alignSelf: 'center',
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
        padding: 6,
    },
});
