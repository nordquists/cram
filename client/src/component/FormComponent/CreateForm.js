import React from 'react';
import { Form, FieldArray } from 'formik';
import { UITextField } from '../UIComponents/UITextField';
import { DraggableCardTableForm } from './DraggableCardTableForm';

import styled from 'styled-components';
import media from "styled-media-query";
import { UICheckbox } from '../UIComponents/UICheckbox';

const CustomForm = styled(Form)`
    width: 40rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
`

const FormSpacing = styled.div`
    margin-bottom: 5px;
`

const Label = styled.label`
    margin-left: 3px;

    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    // text-transform: uppercase;
    font-size: 0.8rem;
    color: #999;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`

const PrivacyWrapper = styled.div`
    margin-left: 20px;
`

export const CreateForm = ({ values }) => {
    return (
        <CustomForm>
            <UITextField
                label="Title"
                name="title"
                type="text"
                inputmode="text"
                placeholder='Enter a title, like "Computer Science 101"'
            />
            <FormSpacing/>
            <Flex>
                <UITextField
                    label="Description"
                    name="description"
                    type="text"
                    inputmode="text"
                    placeholder="Add a description"
                />
                <PrivacyWrapper>
                    <UICheckbox 
                        label="Keep deck private?"
                        name="is_private" 
                        checked={values.is_private}
                        checked_description="The deck is only viewable by you."
                        unchecked_description="Everyone can see this deck."
                        />
                </PrivacyWrapper>
            </Flex>
            <FormSpacing/>
            <Label>Cards</Label>
            <FieldArray
                name="cards"
                render={array => (
                    <DraggableCardTableForm items={values.cards} arrayHelpers={array}/>
                )}
            />
        </CustomForm>
    )
}
