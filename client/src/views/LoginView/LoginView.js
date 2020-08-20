import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'
import media from "styled-media-query";
import { Link } from 'react-router-dom';
import { UIButton } from '../../component/UIComponents/UIButton';
import { UITextField } from '../../component/UIComponents/UITextField';
import { UIBackButton } from '../../component/UIComponents/UIBackButton';
import { UILink } from '../../component/UIComponents/UILink';

const Flex = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AuthForm = styled.div`
    background: #FFF;
    border-radius: 10px;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);

    padding: 30px;
    padding-top: 10px;

    width: 20rem;

    margin-bottom: 20px; 

    ${media.lessThan("920px")`
        width: 90vw;
    `}
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;

    margin-bottom: 15px;
    height: 40px;
`

const FormSpacing = styled.div`
    margin-bottom: 10px;
`

const Title = styled.h1`
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: bold;
    color: #000000;

    margin: 0;

`

const RegisterLink = styled(Link)`

    font-weight: 400;

    text-decoration: none;

    height: 12px;

    margin-top: 5px;
`

const Heading = styled.div`
    margin-bottom: 10px;
`

export const LoginView = () => {

    let handleSubmit = () => {

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
                        <Flex>
                            <AuthForm>
                                <Header>
                                    <UIBackButton onBack={null}/>
                                </Header>
                                <Heading>
                                    <Title>
                                        Login
                                    </Title>
                                </Heading>
                                {/* {error && <p>{error}</p>} */}
                                <FormSpacing/>
                                <UITextField label="Email" name="email" type="email" placeholder="Email"/>
                                <FormSpacing/>
                                <UITextField label="Password" name="password" type="password" placeholder="Password"/>
                                <FormSpacing/>
                                <UIButton text={isSubmitting ? 'Loading...' : 'Submit'}/>
                                <FormSpacing/>
                                <RegisterLink>
                                    <UILink linkText="Register"/>
                                </RegisterLink>
                            </AuthForm>
                        </Flex>
                    </Form>
                </div>
            )}
        />
    )
}
