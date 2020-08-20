import React from 'react'
import styled from 'styled-components';
import { StudyNextLoader } from '../../component/StudyNextComponent/Loaders/StudyNextLoader';
import { BrowseTableLoader } from '../../component/BrowseComponent/Loaders/BrowseTableLoader'

const StudyBrowse = styled.div`
    padding-top: 20px;
`

export const StudyBrowseViewLoader = () => {
    return (
        <div>
            <StudyBrowse>
                <StudyNextLoader/>
                <BrowseTableLoader num_rows={2} num_decks={4}/>
            </StudyBrowse>
        </div>
    )
}
