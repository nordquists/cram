import React from 'react'
import styled from 'styled-components';
import { CardElement } from './CardElement';

const Table = styled.div`

`

const Heading = styled.div`

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #5E5E5E;

    margin-bottom: 10px;
`

export const CardTable = ({ cards }) => {
    const elements = [];
    cards.forEach((card) => {
        elements.push(
            <CardElement key={card._id} front={card.front} back={card.back}/>
        );
    });

    return (
        <Table>
            <Heading>
                {"Cards in the deck (" + cards.length + ")"}
            </Heading>
            {elements}
        </Table>
    )
}
