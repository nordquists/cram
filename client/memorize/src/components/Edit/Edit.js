import React, {useState, useEffect} from 'react';

const Edit = (props) => {

    return (
        <div className="edit">
            <p>{props.id}</p>
            <input
                type="text"
                placeholder="Name"
            />
            <input
                type="text"
                placeholder="Description"
            />



        </div>
    );
}

export default Edit;