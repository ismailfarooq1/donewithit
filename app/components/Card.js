import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors'
import AppText from './AppText';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detail_container}>
                <AppText> {title} </AppText>
                <AppText style={styles.subTitle}> {subTitle} </AppText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        // marginTop: 70,
        // margin: 10,
        overflow: 'hidden',
        // borderWidth: 1
    },
    image: {
        width: "100%",
        height: 200,
        // borderRadius: 15
    },
    detail_container: {
        padding: 10
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})

export default Card;