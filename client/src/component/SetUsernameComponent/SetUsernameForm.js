import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { UIButton } from '../../component/UIComponents/UIButton';
import styled from 'styled-components';
import { UITextField } from '../UIComponents/UITextField';
var Filter = require('bad-words');
var filter = new Filter();

const SetUsername = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const FormArea = styled.div`
`

const Title = styled.h1`
    font-family: Inter;
    font-size: 1.8rem;
    font-weight: bold;
    color: #222;

    margin: 0;
`

const Subtitle = styled.h1`
    font-family: Inter;
    font-size: 1.3rem;
    font-weight: 400;
    color: #999;

    margin: 0;
`

const Heading = styled.div`
    margin-bottom: 30px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const SetUsernameForm = ({ history }) => {
    const { getAccessTokenSilently } = useAuth0();

    async function handleSubmit(data, setSubmitting, setErrors) {
        const { username } = data;
        var trimmedUsername = username.trim();
        const accessToken = await getAccessTokenSilently();

        axios({
            method: 'post',
            url: '/api/users/username',
            data: {username: trimmedUsername},
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        }).then((res) => {
            history.push('/home')
        }).catch(error => {
            if (error.response && error.response.data === "Username taken"){
                setErrors({username: "Username already taken"})
            } else if (error.response && error.response.data === "Username already defined for user"){
                setErrors({username: "Username already defined for this user – something's wrong"})
            } else {
                setErrors({username: "There's a problem with the connection"})
            }
            console.log(error);
        })
        setSubmitting(false);
    }

    return (
        <SetUsername>
            <Formik
                initialValues={{
                    username: ""
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .min(3, "Username must be longer than 3 characters")
                        .max(10, "Username must be no longer than 10 characters")
                        .required('Required')
                        .test('profanity', "Please choose a polite name",
                            function(value) {
                                return !filter.isProfane(value)
                            })
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    handleSubmit(values, setSubmitting, setErrors)
                }}
                render={({submitForm, isSubmitting, values}) => (
                    <FormArea>
                        <Heading>
                            <Title>
                                What should we call you?
                            </Title>
                            <Subtitle>
                                This will be your username and will be the name shown when you create a deck.
                            </Subtitle>
                        </Heading>
                        <UITextField
                            // label="Description"
                            name="username"
                            type="text"
                            inputmode="text"
                        />
                        <ButtonContainer>
                            <UIButton text={isSubmitting ? "Loading..." : "Let's go"} disabled={isSubmitting} onClick={() => submitForm()}/>
                        </ButtonContainer>
                    </FormArea>
                )}
            />  
        </SetUsername>
    )
}
