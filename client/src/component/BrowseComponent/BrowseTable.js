import React from 'react'
import styled from 'styled-components';
import { BrowseRow } from './BrowseRow';

const Table = styled.div`
    display: flex;
    flex-direction: column;
`

export const BrowseTable = ({ rows }) => {
    const elements = [];
    rows.forEach((row) => {
        elements.push(
            <BrowseRow title={row.title} link={row.link} decks={row.decks}/>
        );
    });

    return (
        <Table>
            {elements}
        </Table>
    )
}
