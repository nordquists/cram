import React from 'react'
import styled from 'styled-components';
import { UIButton } from '../UIComponents/UIButton'

const Card = styled.div`
    width: calc(100% -40px);

    background: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    margin-bottom: 10px;

    padding: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    border: none;

`

export const AddCardButton = ({ onClick }) => {
    return (
        <Card>
            <UIButton onClick={ onClick } text={"Add a card"}/>
        </Card>
    )
}
