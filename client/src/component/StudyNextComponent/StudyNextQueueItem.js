import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    padding: 5px;
    width: 200px;

    background: #F2F2F2;
    border-radius: 10px;

    display: flex;
    flex-direction: row;

    align-items: center;

    transition: 0.1ms;

    margin-bottom: 10px;
    margin-top: 10px;
`

const Title = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.2rem;
    letter-spacing: 0.04em;
    text-align: left;
    
    margin: 0;

    color: #515151;
`

const NumberDiv = styled.div`
    height: calc(100% + 20px);
    // border-right: 1px solid #FFFFFF;

    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
`

const Number = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.04em;

    margin: 0;

    color: #515151;
`

export const StudyNextQueueItem = ({ number, title }) => {
    return (
        <Card>
            <NumberDiv>
                <Number>{ number }</Number>
            </NumberDiv>
            <Title>{ title }</Title>
        </Card>
    )
}
