import React from 'react'
import { BrowseTableLoader } from '../../component/BrowseComponent/Loaders/BrowseTableLoader'
import styled from 'styled-components';

const Margin = styled.div`
    margin-top: 20px;
`

export const BrowseViewLoader = ({ num_rows, num_decks }) => {
    return (
        <Margin>
            <BrowseTableLoader num_rows={num_rows} num_decks={num_decks}/>
        </Margin>
    )
}
