import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import LoadingFlashcard from '../../component/FlashcardComponent/LoadingFlashcard';
import ContentLoader from "react-content-loader"
import { StatsPreviewLoader } from '../../component/StatsComponent/Loader/StatsPreviewLoader';
import { CardTableLoader } from '../../component/CardTableComponent/CardTableLoader/CardTableLoader';


const Deck = styled.div`
    padding-top: 20px;

    width: 40rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
    
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;

    margin-bottom: 15px;
    height: 40px;
`

const Heading = styled.div`
    margin-bottom: 49px;
`

const StatsPreviewContainer = styled.div`
    margin-top: 40px;
`

const DeckPreviewContainer = styled.div`
    width: 40rem;
    height: 20rem;

    ${media.lessThan("medium")`
        width: 90vw;
        height: 27vh
    `}
`

const Container = styled.div`
    margin-bottom: 10px;
`

const CardTableContainer = styled.div`
    width: 40rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
`

const Divider = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;

    border-width: 0;
    border-top: 2px solid #eee;
`

const HeadingLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={300}
      height={63}
      viewBox="0 0 300 63"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="221" height="25" /> 
      <rect x="-1" y="36" rx="0" ry="0" width="300" height="10" /> 
      <rect x="0" y="53" rx="0" ry="0" width="300" height="10" />
    </ContentLoader>
  )

export const DeckViewLoader = () => {
    return (
        <div>
            <Deck>
                <Header>
                </Header>
                <Heading>
                    <HeadingLoader/>
                </Heading>
                <DeckPreviewContainer>
                    <LoadingFlashcard/>
                </DeckPreviewContainer>
                <StatsPreviewContainer>
                    <StatsPreviewLoader/>
                </StatsPreviewContainer>
                <Container>
                    <Divider/>
                </Container>
                <CardTableContainer>
                    <CardTableLoader/>
                </CardTableContainer>    
            </Deck>      
        </div>
    )
}
