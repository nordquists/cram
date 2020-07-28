import React, {useState, useEffect} from 'react';
import Header from './Header';

const Edit = (props) => {

    return (
        <div className="edit">
            <Header backLink={props.id}/>

            <p>{props.id}</p>
            <input
                type="text"
                placeholder="Name"
                value={props.id}
            />
            <input
                type="text"
                placeholder="Description"
                value={props.id}
            />



        </div>
    );
}

export default Edit;