import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

import colors from '../config/colors'

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }

]

function AccountsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Hamza"
                    description="hamza@gmail.com"
                    image={require('../assets/hamza.jpg')}

                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name='logout'
                        backgroundColor='#ffe66d'
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountsScreen;