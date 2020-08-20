import React from 'react'
import styled from 'styled-components';
import BrowseElementLoader from './BrowseElementLoader';

const Row = styled.div`
    overflow:visible

    display: flex;
    flex-direction: row;
    flex-flow: wrap;
`

export const BrowseElementRowLoader = ({ num_decks }) => {
    const elements = [];
    for (var i = 0; i < num_decks; i++) {
        elements.push(
            <BrowseElementLoader/>
        );
    }


    return (
        <Row>
            { elements }
        </Row>
    )
}
