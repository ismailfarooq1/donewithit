import React from 'react';
import { FlatList, StyleSheet } from 'react-native'

import Card from '../components/Card';
import Screen from '../components/Screen';

import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Almost new Couch',
        price: 1200,
        image: require('../assets/couch.jpg')
    },

];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;