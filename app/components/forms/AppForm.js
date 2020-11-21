import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    console.log(children)
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}

        </Formik>
    );
}

const styles = StyleSheet.create({

})

export default AppForm;