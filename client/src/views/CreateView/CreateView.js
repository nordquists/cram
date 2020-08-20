import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import media from "styled-media-query";
import { CreateForm } from '../../component/FormComponent/CreateForm';
import { UIButton } from '../../component/UIComponents/UIButton';
import { UIBackButton } from '../../component/UIComponents/UIBackButton';
import { useAuth0 } from '@auth0/auth0-react';
import {Helmet} from "react-helmet";
import * as Yup from 'yup';

const Create = styled.div`
    padding-top: 20px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;

    margin-bottom: 10px;

    width: 40rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
`

const Title = styled.h1`
    font-family: Inter;
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: bold;
    color: #222;

    margin: 0;

`

const Heading = styled.div`
    margin-bottom: 10px;
`

export const CreateView = ({ history }) => {
    const { getAccessTokenSilently } = useAuth0();

    async function handleSubmit(data, setSubmitting) {
        setSubmitting(true);
        const accessToken = await getAccessTokenSilently();

        //remove empty cards trim()
        for (let i = 0; i < data.cards.length; i++) {
            if (data.cards[i].front.trim().length === 0 && data.cards[i].back.trim().length === 0) {
                data.cards.splice(i);
            }
        }

        // add an index to the cards to maintain their order
        for (let i = 0; i < data.cards.length; i++) {
            data.cards[i].index = i;
        }

        axios({
            method: 'post',
            url: '/decks/',
            data: data,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        }).then((res) => {
            setTimeout(() => {
            }, 200)
            history.push('/'.concat(res.data.id).concat('/deck'));
        }).catch(error => {
            if (error === "Username needs to be defined"){
                
            }
            console.log(error);
        })
        setSubmitting(false);
    }

    return (
        <Create>
            <Helmet>
                <title>Create | Cram</title>
                <link rel="canonical" href="http://usecram.com/create" />
            </Helmet>
            <Formik
                initialValues={{
                    title: "",
                    description:  "",
                    cards:  [
                        {
                            front: "",
                            back: "",
                            id: `${0}-${new Date().getTime()}`
                        },
                        {
                            front: "",
                            back: "",
                            id: `${1}-${new Date().getTime()}`
                        },
                        {
                            front: "",
                            back: "",
                            id: `${2}-${new Date().getTime()}`
                        }
                    ],
                    categories:  [],
                    is_private: true
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .min(1, "Title should be longer than 1 character1")
                        .max(24, "Title should be no longer than 24 characters")
                        .required('Your deck needs a title.'),
                    description: Yup.string(),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleSubmit(values, setSubmitting)
                }}
                render={({submitForm, isSubmitting, values}) => (
                    <div>
                        <Header>
                            <UIBackButton onBack={() => history.goBack()}/>
                            <UIButton text={isSubmitting ? "Submitting..." : "Done"} disabled={isSubmitting} onClick={() => submitForm()}/>
                        </Header>
                        <Heading>
                            <Title>
                                Create a new deck
                            </Title>
                        </Heading>
                        <CreateForm values={values}/>
                    </div>
                )}
            />  
        </Create>
    )
}
