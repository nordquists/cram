import React, {useState, useEffect} from 'react';
import Resource from '../Resource';
import Edit from './Edit'

const EditContainer = (props) => {

    useEffect(() => {

    });

    return (
        <Resource
            path="/deck:id/edit"
            render={ data => (
                <Edit data={data} id={props.match.params.deck_id}/>
            )}
        />
    );

}

export default EditContainer;