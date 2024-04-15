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
export const AuthenticationHome = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'blue'} />
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/visitor/download.png')}
                />
            </View>
            <View style={styles.btnOptionsContainer}>
                <View>
                    <Text style={styles.textDescription}>
                        Welcome to Adventist Youth App
                    </Text>
                    <Text style={styles.ingando}>Ingando Management System</Text>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.loginTxt}>Login</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.signUpBtn}>
                            <Text style={styles.signUpTxt}>Sign up</Text>
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
        transform: [{ translateY: -(screen.height / 2) * 0.27 }],
        backgroundColor: 'white',
        marginLeft: screen.width * 0.07,
        marginRight: screen.width * 0.07,
        borderColor: 'black',
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 10,
        paddingTop: 30,
        paddingBottom: 40,
        borderRadius: 10,
    },
    logoContainer: {
        backgroundColor: 'blue',
        height: screen.height / 2,
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
        width: screen.width * 0.8,
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
