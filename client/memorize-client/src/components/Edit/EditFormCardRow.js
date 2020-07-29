import React from 'react'

export const EditFormCardRow = ({ term, definition }) => {


    return (
        <div className="card-row-form">
            <textarea
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={term || ''}
                    // onChange={handleChange}
                />
            <textarea
                type="text"
                name="description"
                placeholder="Description"
                value={definition || ''}
                // onChange={handleChange}
            />
        </div>
    )
}
