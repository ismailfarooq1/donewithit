import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initalMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/hamza.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/hamza.jpg')
    },

]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initalMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id != message.id))
    }

    return (
        <Screen>

            <FlatList
                data={messages}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log("Testing")}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        }
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/hamza.jpg')
                        }
                    ])
                }}

            />
        </Screen>
    );
}

export default MessagesScreen;