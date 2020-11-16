import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';

import defaultStyle from '../../config/styles'

function ErrorMessage({ error, visible }) {
    if (!error || !visible) {
        return null;
    }
    else {
        return (
            <AppText style={styles.text}>{error}</AppText>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        color: defaultStyle.colors.danger,
        paddingLeft: 10
    }
})

export default ErrorMessage;