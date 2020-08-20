import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../icons/arrow-up-right.svg';
import { StatsCircle } from '../StatsComponent/StatsCircle';

const LinkTo = styled(Link)``

const Element = styled.div`
    background: #FFF;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);

    display: inline-block;
    height: 170px;
    width: 150px;

    margin-right: 10px;
    margin-bottom: 10px;
    transition: all .1s ease-out;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.05);
    }
    
    ${media.lessThan("medium")`
        flex: 0 0 auto; 
        flex-basis: calc(50% - 15px);

    `}
    ${media.lessThan("small")`
        width: calc(50% - 10px);

    `}
`

const PaddedElement = styled.div`
    padding: 10px;
`

const TitleDiv = styled.div`
    padding: 0 0.5rem;

    position: absolute;
    bottom: 10px;
`

const Title = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.04em;
    text-align: left;
    
    margin: 0;

    color: #515151;
`

const NumberOfTerms = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.1rem;
    letter-spacing: 0.04em;
    text-align: left;
    
    margin: 0;
    margin-top: 3px;

    color: #515151;
`

const Arrow = styled(ArrowIcon)`
    width: 31px;
    height: 31px;
    stroke: #ccc;
    margin-left: auto;
`

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const circle = {
    width: 60
}

export const BrowseElement = ({ title, id, terms, percentages}) => {
    return (
        <LinkTo to={`${id}/deck`}>
            <Element>
                <PaddedElement>
                    <HeaderDiv>
                        <StatsCircle width={circle.width} green={percentages ? percentages.green * 100 : 0} orange={percentages ? percentages.orange * 100 : 0} red={percentages ? percentages.red * 100 : 0}/>
                        <Arrow/>
                    </HeaderDiv>
                    <TitleDiv>
                        <Title>{title}</Title>
                        <NumberOfTerms>{terms} cards</NumberOfTerms>
                    </TitleDiv>
                </PaddedElement>
            </Element>
        </LinkTo>
    )
}
