import React, {useState, useEffect} from 'react';
import Create from './Create'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const CreateContainer = (props) => {
    const [saving, setSaving] = useState(false);
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    var id = null;

    const createDeck = (data) => {
        setSaving(true);
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/decks/',
            data: data
        }).then((res) => {
            props.history.push('/'.concat(res.data._id).concat('/deck'));
        }).catch(error => {
            console.log(error);
        })
    }

    let onBack =  (e) => {
        props.history.back();
    }

    let onSubmit = (data) => {
        createDeck(data);
        
    }

    return (
        <div>
            <Create onBack={onBack} onSubmit={onSubmit} saving={saving}/>
        </div>
    );

}

export default withRouter(CreateContainer);