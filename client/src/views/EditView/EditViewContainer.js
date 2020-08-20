import React from 'react'
import { EditView } from './EditView'
import { Redirect } from 'react-router-dom';
import { useApi } from '../../hooks/useAPI';

export const EditViewContainer = (props) => {
    const id = props.match.params.deck_id;
    const { loading, data, error } = useApi('/decks/'.concat(id));

    if (!loading && !error) {
        for (const card of data.cards) {
            card.id = card._id;
        }
    }

    return (
        <div>
            {(error) && 
                <Redirect to="/notfound"/>
            }
            {/* {loading &&
                <p>loading...</p>
            } */}
            {(!loading && !error) && 
                 <EditView id={id} loading={loading} data={data} error={error} history={props.history}/>
            }
        </div>
    )
}
