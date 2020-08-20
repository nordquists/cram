import React from 'react'
import styled from 'styled-components';
import { UIH4 } from '../UIComponents/UIH4';
import { Link } from 'react-router-dom';
import { UIButton } from '../UIComponents/UIButton';

const Next = styled.div`
    width: 300px
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

    color: #222;
`

const TermsToLearn = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.1rem;

    margin: 0;
    margin-top: 3px;

    color: #666666;
`

const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 1rem;
    margin-top: 30px;
`

const Heading = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
`

const ButtonContainer = styled.div`
    position: absolute;
    left: 1rem;    
    bottom: 1rem;
`

export const StudyNextEmpty = () => {
    return (
        <Next>
            <Heading>
                <UIH4 text={"Up Next"}/>
            </Heading>
            <TitleArea>
                <Title>Nothing here right now.</Title>
                <TermsToLearn>Check out featured decks on browse or create a new deck!</TermsToLearn>
            </TitleArea>
            <ButtonContainer>
                <Link to={`/create`}><UIButton text={"Create a new deck"}/></Link>
            </ButtonContainer>
        </Next>
    )
}
