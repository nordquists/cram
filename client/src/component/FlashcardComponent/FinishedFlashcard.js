import React from "react";
import styled from 'styled-components'
import media from "styled-media-query";
import { Link, withRouter } from "react-router-dom";
import { UIButton } from "../UIComponents/UIButton";
import { StatsCircle } from "../StatsComponent/StatsCircle";

const Card = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.12);
    
    margin: 0;
    padding: 0rem 2rem;
    width: calc(100% - 4rem);
    height: calc(100%);

    transition: -webkit-transform 0.3s ease-in-out, -webkit-backface-visibility 0s ease-in-out;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(${props => props.flipped ? "180deg" : "0"});

    word-break: break-word;
`

const Flex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StatsContainer = styled.div`
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CongratsContainer = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width 70%;

    ${media.lessThan('medium')`
        font-size: 1.5rem;
    `}

    ${media.lessThan('small')`
        font-size: 1.2rem;
    `}

    margin-top: auto;
    margin-bottom: auto;
`

const ButtonContainer = styled.div`
    margin-top: 10px;
`

const Center = styled.div`
    display: flex;
    flex-direction: row;
`

const circle = {
    width: 100
}

const FinishedFlashcard = ({ percentages, numberOfCards, id,}) => {
    return (
        <Card>
            <Flex>
                <Center>
                    <StatsContainer>
                        <StatsCircle width={circle.width} green={percentages ? percentages.green * 100 : 0} orange={percentages ? percentages.orange * 100 : 0} red={percentages ? percentages.red * 100 : 0}/>
                    </StatsContainer>
                    <CongratsContainer>
                        <span role="img" aria-label="party popper">🎉</span>
                        {numberOfCards} cards practiced!
                        <span>Great Job!</span>
                        <ButtonContainer>
                            <Link to={`/${id}/study`}><UIButton text="Keep going"/></Link>
                        </ButtonContainer>
                    </CongratsContainer>
                </Center>
            </Flex>
        </Card>
    );
}

export default withRouter(FinishedFlashcard);