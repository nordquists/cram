import React, { useState,useEffect } from 'react'
import { EditFormCardTable } from './EditFormCardTable';
import { Form, FieldArray, Field } from 'formik';
import { UITextArea } from '../UIComponents/UITextArea';
import { UITextField } from '../UIComponents/UITextField';
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'

export const EditForm = ({ values }) => {

    return (
        <Form> 
            <div className="edit-primary-elements">
                <UITextField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Deck name"
                />
                <UITextField
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Deck description "
                />
            </div>
            <FieldArray
                name="cards"
                render={array => (
                    <div>
                        {values.cards && values.cards.length > 0 ? (
                            values.cards.map((card, index) => (
                                <div key={index} className="card-row">
                                    <div className="head">
                                        <h2 className="index">{index + 1}</h2>
                                        <button
                                            className="delete"
                                            type="button"
                                            onClick={() => array.remove(index)} // remove a friend from the list
                                        >
                                            <TrashIcon/>
                                        </button>
                                    </div>
                                    <div>
                                        <UITextArea
                                            label="Term"
                                            name={`cards.${index}.front`}
                                            rows="1"
                                        />
                                        <UITextArea
                                            label="Definition"
                                            name={`cards.${index}.back`}
                                            rows="1"
                                        />
                                    </div>
                                </div>
                            ))
                        ) : null}
                        
                        <button
                            className="card-row"
                            type="button"
                            onClick={() => array.push({ front: "", back: ""})} // insert an empty string at a position
                        >
                            Add a card
                        </button>
                    </div>
                )}
            />

        </Form>    
    )
}
