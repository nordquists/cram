import React, {useState, useEffect} from 'react';
import Create from './Create'
import { withRouter } from 'react-router-dom';

const CreateContainer = (props) => {
    const [saving, setSaving] = useState(false);
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const createDeck = async () => {
        setSaving(true);
    }

    let onBack =  (e) => {
        props.history.back();
    }

    let onSubmit = (e) => {
        e.preventDefault();
        createDeck();
        props.history.back();
    }

    return (
        <div>
            <Create onBack={onBack} onSubmit={onSubmit} saving={saving}/>
        </div>
    );

}

export default withRouter(CreateContainer);