import React from 'react'
import styled from 'styled-components';
import {Helmet} from "react-helmet";
import Flashcard from '../../component/FlashcardComponent/Flashcard';
import { UIBackButton } from '../../component/UIComponents/UIBackButton';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100vw;
    height: 50vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;

    margin-bottom: 15px;
    height: 40px;
`

const FlashcardWrapper = styled.div`
    max-width: 40rem;
    height: 20rem;
    width: 100%;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

export const NotFoundView = (props) => {
    const card = {
        front: "Uh oh. We couldn't find that.",
        back: "Click back to return to normal."
    }
    return (
        <Wrapper>
            <Helmet>
                <title>404 | Cram</title>
            </Helmet>
            <Header>
                <StyledLink to={`/home`}><UIBackButton/></StyledLink>
            </Header>
            <FlashcardWrapper>
                <Flashcard card={card}/>
            </FlashcardWrapper>
        </Wrapper>
    )
}
