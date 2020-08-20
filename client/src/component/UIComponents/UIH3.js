import React from 'react'
import styled from 'styled-components';

const Heading = styled.h3`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: #000000;

    margin: 0;
    text-align: left;
`

export const UIH3 = ({ text }) => {
    return (
        <Heading>
            { text }
        </Heading>
    )
}
