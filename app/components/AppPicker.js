import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from './Screen';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem }) {

    const [modelVisible, setModalVisibile] = useState(false);

    return (
        <>

            <TouchableWithoutFeedback
                onPress={() => setModalVisibile(true)}
            >
                <View style={styles.container}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    }

                    {selectedItem ?
                        <AppText style={styles.text}>{selectedItem}<AppText />

                    }

                    <AppText style={styles.text}> {selectedItem ? selectedItem : placeholder} </AppText>
                            <MaterialCommunityIcons
                                name='chevron-down'
                                size={20}
                                color={defaultStyles.colors.medium}
                            />
                </View>
            </TouchableWithoutFeedback>
                <Modal
                    visible={modelVisible}
                    animationType='slide'
                >
                    <Screen>
                        <Button
                            title='close'
                            onPress={() => setModalVisibile(false)}
                        />
                        <FlatList
                            data={items}
                            keyExtractor={(item) => item.value.toString()}
                            renderItem={({ item }) =>
                                <PickerItem
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisibile(false);
                                        onSelectItem(item.label);
                                    }}
                                />
                            }
                        />
                    </Screen>

                </Modal>
        </>
    );
}

const styles = StyleSheet.create({
                container: {
                backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    textInput: defaultStyles.text,
    icon: {
                marginRight: 10
    },
    text: {
                flex: 1,
    }
})

export default AppPicker;