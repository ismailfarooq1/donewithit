import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, description, image, ImageComponent, onPress, renderRightActions }) {
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableHighlight
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={require('../assets/hamza.jpg')} />}
                    <View style={styles.details_container}>
                        <AppText style={styles.title}>{title}</AppText>
                        {description && <AppText style={styles.description}>{description}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500'
    },
    description: {
        color: colors.medium
    },
    details_container: {
        marginLeft: 10,
        justifyContent: 'center'
    }
})

export default ListItem;