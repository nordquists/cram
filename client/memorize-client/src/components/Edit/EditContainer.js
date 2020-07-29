import React, {useState, useEffect} from 'react';
import Resource from '../Resource';
import Edit from './Edit'
import { withRouter } from 'react-router-dom';

const EditContainer = (props) => {
    const id = props.match.params.deck_id;
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const fetchDeck = async () => {
        setLoading(true);
        setData(data => ({...data, name: "sean", description: "hello"}));
        
        // axios.get(this.props.path).then(res => {
        //     setData(res.data);
        //     setLoading(false);
        // })
        // include catch later

        setLoading(false);
    }

    const patchDeck = async () => {
        setSaving(true);
        
    }

    useEffect(() => {
        fetchDeck();
    }, [id])

    let onSubmit = (e) => {
        e.preventDefault();
        patchDeck();
        props.history.push('/'.concat(id));
    }

    return (
        <Edit data={data} setData={setData} onSubmit={onSubmit} saving={saving} loading={loading}/>
    );

}

export default withRouter(EditContainer);