import React from 'react'
import { BrowseElement } from './BrowseElement';
import styled from 'styled-components';

const Row = styled.div`
    // overflow-x: scroll;
    // overflow-y: hidden;
    overflow:visible

    display: flex;
    flex-direction: row;
    flex-flow: wrap;
`

export const BrowseElementRow = ({ decks }) => {
    const elements = [];
    decks.forEach((deck) => {
        elements.push(
            <BrowseElement title={deck.title} id={deck._id} percentages={deck.percentages} terms={deck.terms}/>
        );
    });

    return (
        <Row>
            { elements }
        </Row>
    )
}
