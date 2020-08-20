import React from 'react'
import styled from 'styled-components'

const InnerItem = styled.div`
        display: flex;
        align-items: center;

        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;


        position: absolute;
        backface-visibility: hidden;
        transform: ${props => props.front ? "rotateX(0)" : "rotateX(180deg)"};
    `

export const FlashcardInnerItem = ({ text }) => {
    return (
        <InnerItem>
            {text}
        </InnerItem>
    )
}
