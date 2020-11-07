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
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import colors from '../config/colors'
import defaults from '../config/defaults'


export default function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpeg")}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <AppText>{defaults.brand_name}</AppText>
            </View>

            <View style={styles.buttons_container}>
                <AppButton title="Login" />
                <AppButton title="Sign-up" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 1
    },
    logo: {
        width: 100,
        height: 100,
    },
    logo_container: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    buttons_container: {
        padding: 20,
        width: '100%'
    }
})