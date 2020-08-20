import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { StudyNextCurrentLoader } from './StudyNextCurrentLoader';

const UpNextCard = styled.div`
    background: #FFF;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);

    display:flex;
    flex-direction: row;

    height: 13rem;
    width: 40rem;

    margin-bottom: 20px; 
    
    ${media.lessThan("920px")`
        width: 90vw;
    `}
`

export const StudyNextLoader = () => {
    return (
        <UpNextCard>
                <StudyNextCurrentLoader/>
        </UpNextCard>
    )
}
