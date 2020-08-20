import React from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { UIButtonPrimary } from '../UIComponents/UIButtonPrimary';


const Nav = styled.div`
    background-color: #fff;

    padding-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
`

const NavBar = styled.div`
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    
    width: 1000px;
`

const LogoText = styled.div`
    left: 0;

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 42px;
    letter-spacing: -0.04em;

    color: #222;
`

const Links = styled.div`
    margin-left: auto;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 10px;
`



export const HomeNav = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Nav>
            <NavBar>
                <LogoText>
                    Cram
                </LogoText>
                <Links>
                    <UIButtonPrimary onClick={loginWithRedirect} text="Login"/>
                </Links>
            </NavBar>
        </Nav>
    )
}
