
import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    transition: all .2s cubic-bezier(.645,.045,.355,1);
    user-select: none;
    touch-action: manipulation;
    height: 40px;
    padding: 10px 30px;
    
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    border-radius: 5px;
    color: ${props => props.color ? props.color : "rgba(0,0,0,.65)"};
    background: #fff;
    border-color: ${props => props.color ? props.color : "#d9d9d9"};

    ${props => props.styles ? props.styles : ''}

    &:active, &:focus {
        color: #40a9ff;
        border-color: #40a9ff;
        outline: 0;
    }

    &:hover {
        color: #40a9ff;
        border-color: #40a9ff;
        outline: 0;
    }
`

export const UIButton = ({ text, color, onClick, styles, disabled, type="button", ...props }) => {
    return (
        <Button color={color} onClick={onClick ? () => onClick() : () => {}} styles={styles} disabled={disabled} type={type}>{ text }</Button>
    )
}
