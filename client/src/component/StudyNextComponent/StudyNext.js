import React, { useState } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { useMediaPredicate } from "react-media-hook";

import { StudyNextCurrent } from './StudyNextCurrent';
import { StudyNextEmpty } from './StudyNextEmpty';
import { StudyNextQueue } from './StudyNextQueue';

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
const Separator = styled.div`
    margin-left: 50px;
`

export const StudyNext = ({ upNext }) => {
    const biggerThan = useMediaPredicate("(min-width: 920px)");
    const [index, setIndex] = useState(0);

    let handleIgnore = () => {
        setIndex(index + 1);
    }

    return (
        <UpNextCard>
            {index < upNext.length &&
                 <StudyNextCurrent id={upNext[index]._id} title={upNext[index].title} terms_to_learn={upNext[index].terms} percentages={upNext[index].percentages} handleIgnore={handleIgnore}/>
            }
            { index >= upNext.length &&
                <StudyNextEmpty/>
            }
            {biggerThan && <Separator/>}

            {biggerThan && <StudyNextQueue upNext={upNext} index={index}/>}
        </UpNextCard>
    )
}
