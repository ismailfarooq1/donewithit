import React from 'react';
import { StyleSheet } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/forms/index';
import Screen from '../components/Screen';
import * as Yup from 'yup'
import AppPicker from '../components/AppPicker';

const pickerData = [
    {
        id: 1,
        label: 'BMW',
        value: 'bmw'
    },
    {
        id: 1,
        label: 'Audi',
        value: 'audi'
    },
];
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email')
});

function ListEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm>
                <AppFormField
                    icon='email'
                    placeholder='Email'
                    autoCapitilize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    name='email'
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }

})

export default ListEditScreen;