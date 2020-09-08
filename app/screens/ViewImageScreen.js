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

import colors from '../config/colors'


export default function WelcomeScreen(props) {
    return (
        // <SafeAreaView style={styles.container}>
        //     <View style={styles.top}>
        //         <View style={styles.left_box}></View>
        //     </View>
        //     <View style={styles.middle}>
        //         <Image style={styles.image_main} source={require('../assets/astro.jpg')} />
        //     </View>
        //     <View style={styles.bottom}>
        //     </View>
        // </SafeAreaView>

        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.left_box}></View>
                <View style={styles.right_box}></View>
            </View>
            <Image resizeMethod="contain" style={styles.image_main} source={require('../assets/astro.jpg')} />
            <View style={styles.bottom}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,

    },
    top: {
        flex: 0.2,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    middle: {
        flex: 0.6
    },
    bottom: {
        flex: 0.2,
    },
    left_box: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        marginLeft: 20,
        marginTop: 20
    },
    right_box: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        marginRight: 20,
        marginTop: 20
    },
    image_main: {
        flex: 0.8,
        width: Dimensions.get('window').width,
        height: 900,
        alignItems: 'center',
        justifyContent: 'center'

    },

})