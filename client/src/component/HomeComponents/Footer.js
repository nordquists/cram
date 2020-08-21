import React from 'react'
import styled from 'styled-components';

const ColorSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
    width: 100%;
    min-height: 300px;
    z-index: 1;
`

const SectionSubtitle = styled.div`

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 125%;

    color: #ADADAD;

    margin-bottom: 40px;

    width: 18rem;

`

const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100%;

    z-index: 2;

    padding: 3rem 2rem;
`

const LogoText = styled.div`
    left: 0;

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 42px;
    letter-spacing: -0.04em;

    color: #222;

    margin-bottom: 10px;
    
`

const Links = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;
`

const Link = styled.a`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #A3A3A3;

    margin-right: 20px;
`


export const Footer = () => {
    return (
        <ColorSection>
            <Wrapper>
                <LogoText>
                    Cram
                </LogoText>
                <SectionSubtitle>
                    We're here to make learning easier.
                </SectionSubtitle>
                <Links>
                    <Link href="https://github.com/nordquists/cram">Github</Link>
                    <Link href="mailto:info@usecram.com">Contact</Link>
                </Links>
            </Wrapper>
        </ColorSection>
    )
}
