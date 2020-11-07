import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.details_container}>
                <AppText style={styles.title}>Red Jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.user_container}>
                    <ListItem
                        image={require("../assets/hamza.jpg")}
                        title="Hamza Alam"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    details_container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "500",
        fontSize: 20,
        marginVertical: 10
    },
    user_container: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;