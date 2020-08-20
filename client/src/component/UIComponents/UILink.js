import React from 'react'
import styled from 'styled-components';

const Link = styled.h3`
    margin:0;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;

    letter-spacing: 0.04em;
    color: #A9A9A9;
    text-decoration: none;

    cursor: pointer;
`

export const UILink = ({ linkText, svgRight, svgLeft, onClick }) => {
    return (
        <Link onClick={onClick ? () => onClick() : () => {}}>{ svgLeft && svgLeft }{ linkText && linkText }{ svgRight && svgRight }</Link>
    )
}
