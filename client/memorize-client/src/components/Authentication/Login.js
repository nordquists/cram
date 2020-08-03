import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { UITextField } from '../UIComponents/UITextField';
import Header from '../Header';

export const Login = ({ onBack }) => {

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email')
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
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
                        <h1>Login</h1>
                        <UITextField label="Email" name="email" type="email" placeholder="Email"/>
                        <UITextField label="Password" name="password" type="password" placeholder="Password"/>
                        <button className="form-button" type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                    </Form>
                </div>
            )}

        </Formik>
    )
}
