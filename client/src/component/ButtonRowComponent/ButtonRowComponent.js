import React from "react";
import styled from 'styled-components';

const RED_PERFORMANCE = 0;
const ORANGE_PERFORMANCE = 0.5;
const GREEN_PERFORMANCE = 1;

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;

    margin-right: auto;
    margin-left: auto;
`

const Button = styled.button`
    border: none;
    border-radius: 20%;
    height: 2rem;
    width: 2rem;
    margin: 10px;
    margin-top: 20px;

    transition: 200ms;

    &:hover {
        filter: brightness(0.8);
    }
    
    &:focus {
        filter: brightness(0.8);
        outline: none;
    }
`

const RedButton = styled(Button)`
    background-color: #E88383;
    margin-left: auto;
`

const OrangeButton = styled(Button)`
    background-color: #F1B458;
`

const GreenButton = styled(Button)`
    background-color: #7ACB5E;
    margin-right: auto;
`

const ButtonRowComponent = ({ handleAdvance, index }) => {
    return (
        <ButtonRow>
            <RedButton type="button" onClick={() => handleAdvance(index, RED_PERFORMANCE)}/>
            <OrangeButton type="button" onClick={() => handleAdvance(index, ORANGE_PERFORMANCE)}/>
            <GreenButton type="button" onClick={() => handleAdvance(index, GREEN_PERFORMANCE)}/>
        </ButtonRow>
    );
}

export default ButtonRowComponent;