import React from 'react'
import styled from 'styled-components';
import { BrowseRowLoader } from './BrowseRowLoader';

const Table = styled.div`
    padding-top: 0px;
    display: flex;
    flex-direction: column;
`

export const BrowseTableLoader = ({ num_rows, num_decks }) => {
    const elements = [];
    for (var i = 0; i < num_rows; i++) {
        elements.push(
            <BrowseRowLoader num_decks={num_decks}/>
        );
    }

    return (
        <Table>
            {elements}
        </Table>
    )
}
