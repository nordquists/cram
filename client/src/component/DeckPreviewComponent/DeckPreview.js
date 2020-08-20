import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import media from "styled-media-query";
import {ReactComponent as RightChevronIcon} from '../../icons/chevron-right.svg';
import {ReactComponent as LeftChevronIcon} from '../../icons/chevron-left.svg';

import Flashcard from '../FlashcardComponent/Flashcard'
import useKeyPress from '../../hooks/useKeyPress';

const Left = styled(LeftChevronIcon)`
    height: 1.8em;
    width: 1.8em;
    margin: 0;
    margin-right: 5px;

    display: inline-block;
    vertical-align: middle;
`

const Right = styled(RightChevronIcon)`
    height: 1.8em;
    width: 1.8em;
    margin: 0;
    margin-right: 5px;

    display: inline-block;
    vertical-align: middle;
`

const PreviewButton = styled.button`
    background-color: transparent;
    border: none;
    stroke: #616161;

    cursor: pointer;

    &:disabled {
        stroke: none;
    }
`

const PreviewButtonPair = styled.div`
    width: max-content;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    
`

const FlashcardContainer = styled.div`
    width: 100%;
    height: 100%;

    ${media.lessThan("medium")`
        width: 90vw;
        height: 27vh
    `}
`

export const DeckPreview = ({ deck }) => {
    const [index, setIndex] = useState(0);
    const [leftButton, setLeftButton] = useState(true)
    const [rightButton, setRightButton] = useState(false)
    const rightPress = useKeyPress("ArrowRight");
    const leftPress = useKeyPress("ArrowLeft");

    useEffect(() => {
        if (rightPress) {
            goRight();
        }
    }, [rightPress]);

    useEffect(() => {
        if (leftPress) {
            goLeft();
        }
    }, [leftPress]);

    let goRight = () => {
        if (!rightButton) {
            setIndex(index + 1);
            setLeftButton(false);

            if(index + 1 === deck.length - 1) {
                setRightButton(true);
            }
        }
    }

    let goLeft = () => {
        if (!leftButton) {
            setIndex(index - 1);
            setRightButton(false);

            if(index - 1 === 0) {
                setLeftButton(true);
            }
        }
    }

    return (
            <FlashcardContainer>
                <Flashcard card={deck[index]}/>
                {deck.length > 1 &&
                    <PreviewButtonPair>
                        <PreviewButton disabled={leftButton} onClick={() => goLeft()}><Left/></PreviewButton>
                        <h4>{index + 1} / {deck.length}</h4>
                        <PreviewButton disabled={rightButton} onClick={() => goRight()}><Right/></PreviewButton>
                    </PreviewButtonPair>
                }
            </FlashcardContainer>
    )
}
