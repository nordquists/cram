import { useField } from 'formik';
import React from 'react';
import styled from 'styled-components';

const TextField = styled.input`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.65);
    font-size: 1.2rem;
    background-color: #fff;
    border: 0px solid #d9d9d9;
    border-radius: 7px;
    transition: all .3s;

    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    // line-height: 22px;
    color: #222;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);

    display:none;

`

const Error = styled.div`
    color: #E88383;
    font-size: 0.8rem;
    font-weight: 400;

    height: 0;

    margin-top: 0;
`

const NoError = styled.div`
    height: 12px;

    margin-top: 5px;
`

const Label = styled.label`
    margin-left: 3px;

    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #999;
    display:none
`

export const UIInvisibleInput = ({ label, ...props }) => {

    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <TextField {...props}/>
        </>
    )
}
