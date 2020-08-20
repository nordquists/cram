import React from 'react'
import styled from 'styled-components';
import { UIButton } from '../UIComponents/UIButton';
import { useAuth0 } from '@auth0/auth0-react';

const ColorSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #40A9FF;
    width: 100%;
    min-height: 300px;
    z-index: 1;
`

const SectionTitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 125%;

    color: #FFFFFF;

    margin-bottom: 30px;

    text-align: center;
`

const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 3rem 2rem;
`


export const SuperFooter = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <ColorSection>
            <Wrapper>
                <SectionTitle>
                    Start maximizing your study sessions.
                </SectionTitle>
                <UIButton onClick={loginWithRedirect} text="Get started"/>
            </Wrapper>
        </ColorSection>
    )
}
