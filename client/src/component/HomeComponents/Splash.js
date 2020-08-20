import React from 'react'
import styled from 'styled-components';
import media from "styled-media-query";
import { UIButton } from '../UIComponents/UIButton';
import { Phone } from './Phone/Phone';
import { useAuth0 } from '@auth0/auth0-react';

const SplashBody = styled.div`
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    max-height: 1000px;
    width: 100%;

    position: relative;

    padding-top: 100px;
`

const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100%;

    z-index: 2;
`

const SplashFlex = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 100%;
    height: 100%;

    ${media.lessThan("940px")`
        flex-direction: column;
    `}
`

const TitleWrapper = styled.div`
    max-width: 500px;
    width: calc(100% - 4rem);

    margin-top: 50px;
    margin-bottom: 50px;

    padding: 0 2rem;

    ${media.lessThan("940px")`
        margin-left: auto;
        margin-right: auto;
    `}
`

const Title = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 125%;

    color: #000000;

    margin-bottom: 10px;

    ${media.lessThan("small")`
        font-size: 2.5rem;
    `}
`

const Subtitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;

    color: #ADADAD;

    margin-bottom: 40px;

    ${media.lessThan("small")`
        font-size: 1.4rem;
    `}
`

const ImageWrapper = styled.div`
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
`

const ColorSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #40A9FF;
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 300px;
    z-index: 1;
`

const Section = styled.div`
    max-width: 400px;
    width: calc(100% - 4rem);
    padding: 0 2rem;

    ${media.lessThan("940px")`
        display: none;
    `}
`

const SectionTitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 125%;

    color: #FFFFFF;

    margin-bottom: 10px;
`

const SectionSubtitle = styled.div`

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 125%;

    color: #FFFFFF;

`

export const Splash = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <SplashBody>
            <Wrapper> 
                <SplashFlex>
                    <TitleWrapper>
                        <Title>
                            Optimize your learning, minimally.
                        </Title>
                        <Subtitle>
                            Simple and clean spaced repetition application for people who enjoy learning.
                        </Subtitle>
                        <UIButton onClick={loginWithRedirect} text="Get started"/>
                    </TitleWrapper>
                    <ImageWrapper>
                        <Phone/>
                    </ImageWrapper>
                    
                </SplashFlex>
            </Wrapper>
            <ColorSection>
                <Wrapper>
                    <Section>
                        <SectionTitle>
                            No fluff, just learning.
                        </SectionTitle>
                        <SectionSubtitle>
                            Cram eliminates distractions, so you can focus on what matters.
                        </SectionSubtitle>
                    </Section>
                </Wrapper>
            </ColorSection>
        </SplashBody>
    )
}
