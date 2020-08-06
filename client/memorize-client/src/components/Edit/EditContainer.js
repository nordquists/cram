import React, {useState, useEffect} from 'react';
import Edit from './Edit'
import { withRouter } from 'react-router-dom';

const EditContainer = (props) => {
    const id = props.match.params.deck_id;
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const fetchDeck = async () => {
        setLoading(true);
        setData(data => ({...data, 
            name: "sean", 
            description: "hello",
            cards: [
                {
                    front: "front1",
                    back:"back1"
                },
                {
                    front: "front2",
                    back:"back1"
                },
                {
                    front: "front3",
                    back:"back1"
                },
                {
                    front: "front4",
                    back:"back1"
                }
            ]
        }));
        
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

    let onBack =  (e) => {
        props.history.push('/'.concat(id));
    }

    let onSubmit = (e) => {
        e.preventDefault();
        patchDeck();
        props.history.push('/'.concat(id));
    }

    return (
        <div>
            {!loading && 
            <Edit data={data} setData={setData} onBack={onBack} onSubmit={onSubmit} saving={saving} loading={loading}/>
            }
        </div>
    );

}

export default withRouter(EditContainer);