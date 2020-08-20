import React from 'react'
import styled from 'styled-components';
import { UIH4 } from '../UIComponents/UIH4';
import { StudyNextQueueItem } from './StudyNextQueueItem';

const Queue = styled.div`

`
const Heading = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
`

const List = styled.div`
    margin-left: 1rem;
`

export const StudyNextQueue = ({ upNext, index}) => {
    const elements = [];
    var i = 2;
    upNext.slice(index + 1, index + 3 > upNext.length ? upNext.length : index + 3).forEach((deck) => {
        elements.push(
            <StudyNextQueueItem title={deck.title} number={i}/>
        );
        i++;
    });

    return (
        <Queue>
            <Heading>
                <UIH4 text={"Your Queue"}/>
            </Heading>
            <List>
                {elements}
            </List>
        </Queue>
    )
}
