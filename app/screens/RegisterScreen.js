import React from 'react';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password").min(3),
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={() => console.log("hello")}
            >
                <AppFormField
                    name='name'
                    placeholder='Name'
                    autoCapitilize='none'
                    autoCorrect={false}
                    icon='lock'
                />
                <AppFormField
                    name='email'
                    placeholder='Email'
                    autoCapitilize='none'
                    autoCorrect={false}
                    icon='email'
                />
                <AppFormField
                    name='password'
                    placeholder='Password'
                    autoCapitilize='none'
                    autoCorrect={false}
                    icon='lock'
                />
                <SubmitButton title='Register' />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }

})

export default RegisterScreen;