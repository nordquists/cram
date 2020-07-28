import React, {useState, useEffect} from 'react';
import StudyBrowse from './StudyBrowse';
import Resource from '../Resource';

const StudyBrowseContainer = (props) => {

    return (
        <Resource
            path="/"
            render={ data => (
                <StudyBrowse data={data}/>
            )}
        />
    );

}

export default StudyBrowseContainer;