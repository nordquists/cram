import React from 'react'
import styled from 'styled-components';
import media from "styled-media-query";
import ContentLoader from "react-content-loader"
import { BrowseElementRowLoader } from './BrowseElementRowLoader';

const Row = styled.div`
    margin-bottom: 10px;
    width: calc(4*163px);

    ${media.lessThan("medium")`
        width: 90vw;

    `}
`

const Heading = styled.div`
    display: flex;
    flex-direction: row;

    margin-bottom: 18px;
`

const ViewAllContainer = styled.div`
    position: relative;
    top: -0.4rem;
    margin-left: auto;
    height: 20px;
`
const Title = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={20}
    viewBox="0 0 150 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <rect x="-2" y="4" rx="0" ry="0" width="147" height="13" />
  </ContentLoader>
)

export const BrowseRowLoader = ({ num_decks }) => {
    return (
        <Row>
            <Heading>
                <Title/>
                <ViewAllContainer/>
            </Heading>
            <BrowseElementRowLoader num_decks={num_decks}/>
        </Row>
    )
}
