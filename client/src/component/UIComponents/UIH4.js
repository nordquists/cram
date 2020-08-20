import React from 'react'
import styled from 'styled-components';

const Heading = styled.h4`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 22px;
    text-transform: uppercase;

    color: #BCBCBC;

    margin: 0;
    text-align: left;
`

export const UIH4 = ({ text }) => {
    return (
        <Heading>
            { text }
        </Heading>
    )
}
