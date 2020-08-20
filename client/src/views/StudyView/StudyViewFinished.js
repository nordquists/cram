import React from 'react'
import FinishedFlashcard from '../../component/FlashcardComponent/FinishedFlashcard'
import styled from 'styled-components'
import media from "styled-media-query";
import ProgressBar from '../../component/ProgressBarComponent/ProgressBar';
import { UIButton } from '../../component/UIComponents/UIButton';
import { Link, withRouter } from 'react-router-dom';

const Study = styled.div`
    padding-top: 20px;
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const Centered = styled.div``


const FlashcardContainer = styled.div`
    width: 40rem;
    height: 20rem;

    ${media.lessThan("medium")`
        width: 90vw;
        height: 27vh
    `}
`

const ButtonContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const StudyViewFinished = ({ percentages, numberOfCards, id, history, counts }) => {
    return (
        <Study>
            <Flex>
                <Header/>
                <Centered>
                    <ProgressBar counts={counts} length={numberOfCards}/>
                    <FlashcardContainer>
                        <FinishedFlashcard percentages={percentages} numberOfCards={numberOfCards} id={id} history={history}/>
                    </FlashcardContainer>
                    <ButtonContainer>
                        <Link to={`/${id}/deck`}><UIButton text="Finish session"/></Link>
                    </ButtonContainer>
                </Centered>
            </Flex>
        </Study>
    )
}

export default withRouter(StudyViewFinished);