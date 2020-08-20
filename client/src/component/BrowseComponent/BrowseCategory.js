import React from 'react'
import styled from 'styled-components';
import { UIBackButton } from '../UIComponents/UIBackButton';
import media from "styled-media-query";
import { BrowseElement } from './BrowseElement';

const Browse = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-bottom: 20px;
`

const Row = styled.div`
    overflow:visible

    display: flex;
    flex-direction: row;
    flex-flow: wrap;
`

export const BrowseCategory = ({ decks, title, history }) => {
    const elements = [];
    decks.forEach((deck) => {
        elements.push(
            <BrowseElement title={deck.title} id={deck._id} percentages={deck.percentages} terms={deck.terms}/>
        );
    });
    return (
        <Browse>
            <Header>
                <UIBackButton onBack={() => history.goBack()}/>
            </Header>
            <Heading>
                <Title>
                    {title}
                </Title>
            </Heading>
            <Row>
                {elements}
            </Row>
        </Browse>
    )
}
