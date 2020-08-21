import React from 'react'
import { DeckViewLoader } from './DeckViewLoader'
import { DeckView } from './DeckView'
import { useApi } from '../../hooks/useAPI';
import { Redirect } from 'react-router-dom';

export const DeckViewContainer = (props) => {
    const id = props.match.params.deck_id;
    const { loading, data, error } = useApi('/api/decks/stats/'.concat(id));

    return (
        <div>
            {(error) && 
                <Redirect to="/notfound"/>
            }
            {loading &&
                <DeckViewLoader/>
            }
            {(!loading && !error) && 
                <DeckView loading={loading} data={data} error={error}/>
            }
        </div>
    )
}
