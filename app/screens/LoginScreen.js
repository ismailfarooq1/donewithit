import React from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <>
                        <AppFormField
                            icon='email'
                            placeholder='Email'
                            autoCapitilize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            name='email'
                        />

                        <AppFormField
                            icon='lock'
                            placeholder='Password'
                            autoCapitilize='none'
                            secureTextEntry={true}
                            autoCorrect={false}
                            textContentType='password'
                            name='password'
                        />
                        <SubmitButton
                            title='Login'
                        />

                    </>
                )}

            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;