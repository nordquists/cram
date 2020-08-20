import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StatsCircle } from './StatsCircle';
import { UIButton } from '../UIComponents/UIButton';
import { UIH4 } from '../UIComponents/UIH4';

const Heading = styled.div``

const Stats = styled.div`    `

const StatsFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-content:center;
    justify-content: center;
`


const ButtonArea = styled.div`

    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
    
    `

export const StatsPreview = ({ width, id, update_color, update_num, terms_to_learn, green, orange, red }) => {
    return (
        <Stats>
            <Heading>
                <UIH4 text={"Study"}/>
            </Heading>
            <StatsFlex>
                <StatsCircle width={width} green={green} orange={orange} red={red}/>
                {/* <UpdateArea>
                    <TermsToLearn>You added <Number>{update_num}</Number> cards to your {update_color} circle last time.</TermsToLearn>
                </UpdateArea> */}
                <ButtonArea>
                    {/* <TermsToLearn>Practice <Number>{terms_to_learn}</Number> cards</TermsToLearn> */}
                    <Link to={`/${id}/study`}><UIButton text={"Start a Session"}/></Link>
                </ButtonArea>
            </StatsFlex>
        </Stats>
    )
}
