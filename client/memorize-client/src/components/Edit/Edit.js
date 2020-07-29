import React, {useState, useEffect} from 'react';
import Header from '../Header';
import { EditForm } from './EditForm';


const Edit = (props) => {
    const { data, setData, onSubmit, saving } = props;

    return (
        <div className="edit">
            <Header onBack={true} otherButtonText={!saving ? "Done" : "Saving..."} otherButtonFormId={"edit-form"} title={"Edit your deck"} subtitle={"Click done to save your work"} onSubmit={onSubmit}/>
            <EditForm onSubmit={onSubmit} data={data} setData={setData}/>
        </div>
    );
}

export default Edit;