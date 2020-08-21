import React from 'react'
import { BrowseView } from './BrowseView'
import { useApi } from '../../hooks/useAPI';
import { Redirect } from 'react-router-dom';
import { BrowseViewLoader } from './BrowseViewLoader';

export const BrowseViewContainer = () => {
    const { loading, data, error } = useApi('/api/browse');

    return (
        <div>
            {(error) && 
                <Redirect to="/notfound"/>
            }
            {loading &&
                <BrowseViewLoader num_rows={3} num_decks={4}/>
            }
            {(!loading && !error) && 
                <BrowseView loading={loading} data={data} error={error}/>
            }
        </div>
    )
}
