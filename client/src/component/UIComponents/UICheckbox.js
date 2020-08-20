import { useField } from 'formik';
import React from 'react'
import styled from 'styled-components';

const Checkbox = styled.input`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    display: inline-block;
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
    margin-right: 8px;

    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    color: #999;

    margin-bottom: 5px;
`

const Border = styled.div`
    background-color: #fff;

    border: 1px solid #EEEEEE;
    box-sizing: border-box;
    border-radius: 5px;

    padding: 10px;

    min-width: 10rem;
`

const Description = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    /* identical to box height */

    letter-spacing: 0.04em;

    color: #696969;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`


export const UICheckbox = ({label, checked, checked_description, unchecked_description, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <Border>
                <Flex>
                    <Label htmlFor={props.id || props.name}>{label}</Label>
                    <Checkbox 
                        type="checkbox"
                        checked={checked}
                        {...field} {...props}
                    />
                </Flex>
                { (checked && checked_description) &&
                    <Description>
                        {checked_description}
                    </Description>
                }
                { (!checked && unchecked_description) &&
                    <Description>
                        {unchecked_description}
                    </Description>
                }
            </Border>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}
