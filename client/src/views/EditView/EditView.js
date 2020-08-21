import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import media from "styled-media-query";
import { CreateForm } from '../../component/FormComponent/CreateForm';
import { UIButton } from '../../component/UIComponents/UIButton';
import { UIBackButton } from '../../component/UIComponents/UIBackButton';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {Helmet} from "react-helmet";
import * as Yup from 'yup';

const Edit = styled.div`
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
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: bold;
    color: #000000;

    margin: 0;
`

const Heading = styled.div`
    margin-bottom: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

export const EditView = ({ id, loading, data, error, history }) => {
    const { getAccessTokenSilently } = useAuth0();

    async function handleSubmit(data, setSubmitting) {
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
            method: 'patch',
            url: '/api/decks/'.concat(id),
            data: data,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                type: 'edit'
            }
        }).then((res) => {
            history.push('/'.concat(id).concat('/deck'));
        }).catch(error => {

            console.log(error);
        })
        setSubmitting(false);
    }  

    return (
        <div>
            <Helmet>
                <title>Edit {data.title} | Cram</title>
            </Helmet>
            <Edit>
                <Formik
                    initialValues={{
                        title: data.title,
                        description:  data.description,
                        cards:  data.cards,
                        categories:  data.categories,
                        is_private: data.is_private
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
                                <StyledLink to={`/home`}><UIBackButton/></StyledLink>
                                <UIButton text={isSubmitting ? "Submitting..." : "Done"} disabled={isSubmitting} onClick={() => submitForm()}/>
                            </Header>
                            <Heading>
                                <Title>
                                    Edit your deck
                                </Title>
                            </Heading>
                            <CreateForm values={values}/>
                        </div>
                    )}
                />  
            </Edit>
        </div>
    )
}
