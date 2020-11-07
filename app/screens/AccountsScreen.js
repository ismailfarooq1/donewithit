import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const menuItems = [
    { title: 'My Listings' }
]

function AccountsScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem
                    title="Ismail"
                    description="ismaeelfarooq53@gmail.com"
                    image={require('../assets/hamza.jpg')}

                />
            </View>

            <View style={styles.container}>
                <FlatList />

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }
})

export default AccountsScreen;