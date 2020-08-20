import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { UIButton } from '../../component/UIComponents/UIButton';
import styled from 'styled-components';
import {Helmet} from "react-helmet";
import media from "styled-media-query";
import { UIBackButton } from '../../component/UIComponents/UIBackButton';

const Settings = styled.div`
    padding-top: 20px;

    width: 40rem;

    ${media.lessThan("medium")`
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

const Heading = styled.div`
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
`

const Title = styled.h1`
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: bold;
    color: #000000;

    margin: 0;

`

const Logout = styled.div`
    margin-left: auto;
`

const Bugs = styled.div`
    margin-top: 30px;
`

const Subtitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;

    margin: 0;
`

const Text = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #888;
`

const Email = styled.a``

export const SettingsView = ({ history }) => {
    const { logout, user } = useAuth0();
    return (
        <div>
            <Helmet>
                <title>Settings | Cram</title>
                <link rel="canonical" href="http://usecram.com/settings" />
            </Helmet>
            <Settings>
                <Header>
                    <UIBackButton onClick={() => history.goBack()}/>
                </Header>
                <Heading>
                    <Title>Settings</Title>
                    <Logout>
                        <UIButton onClick={logout} text="Logout"/>
                    </Logout>
                </Heading>
                <Bugs>
                    <Subtitle>
                        Hey, thanks for using Cram!
                    </Subtitle>
                    <Text>
                        If you want to request a feature or report any bugs feel free to email <Email href="mailto:bugs@nordquists.com">bugs@nordquists.com</Email>.
                    </Text>
                </Bugs>
            </Settings>
        </div>
    )
}
