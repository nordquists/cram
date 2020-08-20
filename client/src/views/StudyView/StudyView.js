import React from 'react';
import ProgressBar from '../../component/ProgressBarComponent/ProgressBar';
import ButtonRowComponent from '../../component/ButtonRowComponent/ButtonRowComponent';
import FlashcardStudy from '../../component/FlashcardComponent/FlashcardStudy';
import styled from 'styled-components';
import media from "styled-media-query";
import { UIBackButton } from '../../component/UIComponents/UIBackButton';
import LoadingFlashcard from '../../component/FlashcardComponent/LoadingFlashcard';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Study = styled.div`
    padding-top: 20px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 20px;
    height: 20px;

    width: 40rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Centered = styled.div``


const StyledLink = styled(Link)`
    text-decoration: none;
`

const FlashcardContainer = styled.div`
    width: 40rem;
    height: 20rem;

    ${media.lessThan("medium")`
        width: 90vw;
        height: 27vh
    `}
`

const StudyView = ({ loading, current, index, counts, length, handleAdvance, id }) => {
    return (
        <Study> 
            <Helmet>
                <title>Studying | Cram</title>
                <link rel="canonical" href="http://usecram.com/" />
            </Helmet>
            <Flex>
                <Header>
                    <StyledLink to={`/${id}/deck`}><UIBackButton/></StyledLink>
                </Header>
                <Centered>
                    {loading && 
                        <ProgressBar counts={{green:0, orange:0, red:0}} length={1}/>
                    }
                    {!loading &&
                        <ProgressBar counts={counts} length={length}/>
                    }
                    <FlashcardContainer>
                        {loading && 
                            <LoadingFlashcard/>
                        }
                        {!loading && 
                            <FlashcardStudy card={current}/>
                        }
                    </FlashcardContainer>
                    {loading && 
                        <ButtonRowComponent handleAdvance={()=>{}} index={0}/>
                    }
                    {!loading && 
                        <ButtonRowComponent handleAdvance={handleAdvance} index={index}/>
                    }
                </Centered>
            </Flex>
        </Study>
    )
}

export default StudyView;
