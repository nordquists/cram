import React, {useState} from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UITextField } from '../UIComponents/UITextField';
import Header from '../Header';
import axios from 'axios';
import { AuthContext } from "../../index";
import { loginUserSuccess, loginUserFailure } from "../../actions/AuthActions"
import { Redirect } from "react-router-dom";


export const Login = ({ onBack, handleSubmit, history }) => {
    const { state, dispatch } = React.useContext(AuthContext);
    const [error, setError] = useState(null);

    function handleSubmit(values, { setSubmitting, setErrors }) {
        axios.post('users/login', {
            email: values.email,
            password: values.password
        })
        .then(res => {
            dispatch(loginUserSuccess(res.data.email, res.data.jwtToken, res.data.refreshToken));
            history.push('/')
        })
        .catch(err => {
            dispatch(loginUserFailure(err));
            if (err.response && err.response.status == 400) {
                setErrors({ password: err.response.data });
            } else {
                setError("It looks like we're having trouble connecting to the server.")
            }
        })
        setSubmitting(false);
    }

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
            onSubmit={handleSubmit}
            render={({submitForm, isSubmitting, values, errors}) => (
                <div>
                    <Form>
                        <div className="auth-form">
                            <Header
                                onBack={onBack}
                            />
                            <h1>Login</h1>
                            {error && <p>{error}</p>}
                            <UITextField label="Email" name="email" type="email" placeholder="Email"/>
                            <UITextField label="Password" name="password" type="password" placeholder="Password"/>
                            <button className="form-button" type="submit">{isSubmitting ? 'Loading...' : 'Submit'}</button>
                        </div>
                    </Form>
                </div>
            )}
        />
    )
}
