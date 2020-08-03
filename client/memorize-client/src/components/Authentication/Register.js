import React, { useState } from 'react';
import { Formik, yupToFormErrors, Form } from 'formik';
import * as Yup from 'yup';
import { UITextField } from '../UIComponents/UITextField';
import { UICheckBox } from '../UIComponents/UICheckBox';
import Header from '../Header';

export const Register = ({ onBack }) => {

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                acceptedTerms:false
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .min(3, "Username must be longer than 3 characters")
                    .max(10, "Username must be no longer than 10 characters")
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email')
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
                confirmPassword: Yup.string()
                    .required('Required')
                    .test("passwords-match", "Passwords must match", function(value) {
                        return this.parent.password === value;
                    }),
                acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions')
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    resetForm();
                    setSubmitting(false);
                }, 1000)
            }}
        >
            {props => (
                <div>
                    <Form className="auth-form">
                        <Header
                            onBack={onBack}
                        />
                        <h1>Register</h1>
                        <UITextField label="Username" name="username" type="text" placeholder="Username"/>
                        <UITextField label="Email" name="email" type="email" placeholder="Email"/>
                        <UITextField label="Password" name="password" type="password" placeholder="Password"/>
                        <UITextField label="Confirm Password" name="confirmPassword" type="password" placeholder="Password"/>
                        <UICheckBox name="acceptedTerms">I accept the terms and conditions</UICheckBox>
                        <button className="form-button" type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                    </Form>
                </div>
            )}

        </Formik>
    )
}
