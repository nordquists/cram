import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    width: calc(100% - 40px);

    background: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    margin-bottom: 10px;

    padding: 20px;
`

const Term = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;

    color: #222;
    margin-bottom: 20px;
`

const Definition = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;

    color: #222;
`


export const CardElementForm = ({ front, back}) => {
    return (
        <Card>
            <Term>
                {front}
            </Term>
            <Definition>
                {back}
            </Definition>
        </Card>
    )
}
