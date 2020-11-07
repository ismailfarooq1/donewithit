import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export default function AppText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: Platform.select({
        ios: {
            fontFamily: 'Avenir',
            fontSize: 20
        }
    })
})
