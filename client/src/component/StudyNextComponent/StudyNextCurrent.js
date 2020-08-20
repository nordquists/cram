import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { UIButton } from '../UIComponents/UIButton';
import { UIH4 } from '../UIComponents/UIH4';
import { StatsCircle } from '../StatsComponent/StatsCircle';

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
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    
    margin-top: 0.5rem;
    margin-left: 1rem;
`

const ButtonContainer = styled.div`
    position: absolute;
    left: 1rem;    
    bottom: 1rem;
`

const IgnoreButton = styled(UIButton)`
    margin-left: 10px;
    margin-left: 10px;
    align-items: flex-end;
`

const Heading = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
`

const circle = {
    width: 90
}

export const StudyNextCurrent = ({ id, title, terms_to_learn, percentages, handleIgnore}) => {
    return (
        <Next>
            <Heading>
                <UIH4 text={"Up Next"}/>
            </Heading>
            <Flex>
                <StatsCircle width={circle.width} green={percentages.green * 100} orange={percentages.orange * 100} red={percentages.red * 100}/>
                <TitleArea>
                    <Title>{title}</Title>
                    <TermsToLearn>Learn {terms_to_learn} new card{terms_to_learn === 1 ? '' : 's'}</TermsToLearn>
                </TitleArea>
            </Flex>
            <ButtonContainer>
                <Link to={`/${id}/study`}><UIButton text={"Start Session"}/></Link>
                <IgnoreButton text={"Ignore"} color={"#D9D9D9"} onClick={() => handleIgnore()} styles={{ marginLeft: "10px" }}/>
            </ButtonContainer>
        </Next>
    )
}
