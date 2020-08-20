import React from 'react'
import styled from 'styled-components';
import media from "styled-media-query";
import { SetUsernameForm } from '../../component/SetUsernameComponent/SetUsernameForm';
import {Helmet} from "react-helmet";

const FirstTime = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Welcome = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 0.04em;
    color: rgba(0, 0, 0, 0.1);
    text-align: left;
`

const Heading = styled.div`
    margin-bottom: 30px;

    width: 27rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `} 
`

const Body = styled.div`
    width: 27rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `} 

`


export const FirstTimeView = ({history}) => {

    // check if username already defined, if so just skip to onboarding
    return (
        <div>
            <Helmet>
                <title>Welcome | Cram</title>
                <link rel="canonical" href="http://usecram.com/welcome" />
            </Helmet>
            <FirstTime>
                <Heading>
                    <Welcome>
                        Welcome to cram.
                    </Welcome>
                </Heading>
            
                <Body>
                    <SetUsernameForm history={history}/>
                </Body>
           
            </FirstTime>
        </div>
    )
}
