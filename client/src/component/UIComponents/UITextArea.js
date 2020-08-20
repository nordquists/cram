import { useField } from 'formik';
import React from 'react'
import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';

const TextArea = styled(TextareaAutosize)`
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
    // line-height: 1.5715;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border: 0;
    border-radius: 7px;
    resize: none;

    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    // line-height: 22px;
    color: #222;
`

const Label = styled.label`
    margin-left: 3px;

    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    color: #999;
`

const Border = styled.div`
    background-color: #fff;

    border: 1px solid #EEEEEE;
    box-sizing: border-box;
    border-radius: 5px;

    padding-top: 5px;
    padding-left: 5px;
`

export const UITextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <Border>
                <Label htmlFor={props.id || props.name}>{label}</Label>
                <TextArea
                    rows={2}
                    // minRows={2}
                    maxRows={5}
                    className="text-area"
                    {...field} {...props}
                />
            </Border>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}
