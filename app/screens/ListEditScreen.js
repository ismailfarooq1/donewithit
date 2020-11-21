import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms/index';
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
    title: Yup.string().required().min(3).label('Title'),
    price: Yup.string().required().max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().required().min(5).label('Description')
});

function ListEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: '', price: '', category: null, description: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name='title'
                    placeholder='Title'
                    autoCapitilize='none'
                    autoCorrect={false}
                    maxLength={255}
                />
                <AppFormField
                    name='price'
                    placeholder='Price'
                    autoCapitilize='none'
                    autoCorrect={false}
                    keyboardType='numeric'
                    maxLength={8}
                />
                <AppFormPicker
                    name='category'
                    items={pickerData}
                    placeholder='Categories'
                />
                <AppFormField
                    name='description'
                    placeholder='Description'
                    autoCapitilize='none'
                    autoCorrect={false}
                    numberOfLines={3}
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