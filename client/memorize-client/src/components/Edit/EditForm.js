import React, { useState,useEffect } from 'react'
import { EditFormCardTable } from './EditFormCardTable';

export const EditForm = ({ data, setData, onSubmit }) => {
    // if(inputs.decks.length < 3) {

    // }

    useEffect(() => {
        console.log(data);
    }, [data])

    let handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    let newCard = () => {
        console.log("newcard")
    }

    return (
        <form id="edit-form" className="edit-form" onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <textarea
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name || ''}
                    onChange={handleChange}
                />
                <label>Description</label>
                <textarea
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={data.description || ''}
                    onChange={handleChange}
                />
            </div>

            <hr/>


            <div>
                <EditFormCardTable/>
                <button type="button" onClick={newCard}>Add Card</button>
            </div>


        </form>
    )
}
