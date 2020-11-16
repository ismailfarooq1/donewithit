import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppButton from '../AppButton';



function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
        />
    );
}

const styles = StyleSheet.create({

})

export default SubmitButton;