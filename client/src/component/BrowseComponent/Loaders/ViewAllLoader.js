import React from 'react'
import ContentLoader from "react-content-loader"
import { BrowseElementRowLoader } from './BrowseElementRowLoader'
import styled from 'styled-components';

const Body = styled.div`
    padding-top: 50px;
    height: 20px;
`

const Header = styled.div`
    padding-bottom: 30px;
`

const HeaderLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={200}
      height={30}
      viewBox="0 0 200 30"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="200" height="30" />
    </ContentLoader>
)

export const ViewAllLoader = () => {
    return (
        <Body>
            <Header>
                <HeaderLoader/>
            </Header>
            <BrowseElementRowLoader num_decks={10}/>
        </Body>
    )
}
