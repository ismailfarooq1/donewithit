import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Alert,
    Platform,
    Dimensions,
    ImageBackground
} from "react-native";


export default function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpeg")}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../assets/background2.jpg")} />
                <Text>Ismail's OLX</Text>
            </View>

            <View style={styles.login_btn}>

            </View>
            <View style={styles.signup_btn}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    login_btn: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    signup_btn: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logo_container: {
        position: "absolute",
        top: 100,
        alignItems: 'center'
    }
})