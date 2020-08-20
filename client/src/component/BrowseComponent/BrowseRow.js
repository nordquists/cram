import React from 'react'
import { BrowseElementRow } from './BrowseElementRow'
import { UIH3 } from '../UIComponents/UIH3'
import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from 'react-router-dom';

import { UILink } from '../UIComponents/UILink';
import { ReactComponent as RightChevron } from '../../icons/chevron-right.svg'

const Row = styled.div`
    margin-bottom: 10px;
    width: calc(4*163px);

    ${media.lessThan("medium")`
        width: 90vw;

    `}
`

const Heading = styled.div`
    margin-bottom: 12px;

    display: flex;
    flex-direction: row;
`

const ViewAllButton = styled(RightChevron)`
    position: relative;
    top: .4em;
    margin: 0;

    width: 1.4rem;
    height: 1.4rem;

    stroke: #A9A9A9;
    fill: none;
`

const ViewAllContainer = styled.div`
    position: relative;
    top: -0.4rem;
    margin-left: auto;
`

const LinkTo = styled(Link)`
    text-decoration: none;
    &:after {
        display: none;
    }
`

export const BrowseRow = ({ title, link, decks }) => {
    return (
        <>
            {decks.length > 0 &&
                <Row>
                    <Heading>
                        <UIH3 text={title}/>
                        <ViewAllContainer>
                            {link &&
                                <LinkTo to={link}><UILink linkText={"View All"} svgRight={<ViewAllButton/>}/></LinkTo>
                            }
                        </ViewAllContainer>
                    </Heading>
                    <BrowseElementRow decks={decks}/>
                </Row>
            }
        </>
    )
}
