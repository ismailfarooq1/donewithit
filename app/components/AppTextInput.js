import React from 'react';
import { TextInput, View, StyleSheet, Platform, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'

function AppTextInput({ icon, onChangeText, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon &&
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
            }

            <TextInput
                style={[defaultStyles.text, styles.textInput]}
                {...otherProps}
                onChangeText={onChangeText}
            />
        </View>
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
    textInput: {
        flex: 1,
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput;