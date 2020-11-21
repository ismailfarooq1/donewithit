import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import defaultStyles from '../../config/styles'
import AppPicker from '../AppPicker';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';


function AppFormPicker({ name, items, placeholder }) {
    const { setFieldValue, values, errors, touched } = useFormikContext()

    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                name={name}
                onSelectItem={(value) => setFieldValue(name, value)}
                selectedItem={values[name]}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]} />
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

export default AppFormPicker;