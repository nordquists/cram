import React from 'react'
import { useApi } from '../../hooks/useAPI';
import { Redirect } from 'react-router-dom';
import { ViewAllView } from './ViewAllView';
import { ViewAllLoader } from '../../component/BrowseComponent/Loaders/ViewAllLoader';

const valid_views = ['/recent', '/top', '/featured', '/my']
const named_views = ['Recent decks', 'Top decks', 'Featured decks', 'My decks']

export const ViewAllViewController = (props) => {
    let invalid_url = false;
    let index = -1;
    const { loading, data, error } = useApi('/browse/' + props.location.pathname.slice(1));
    
    for (var i = 0; i < named_views.length; i++) {
        if (valid_views[i] === props.location.pathname) {
            index = i;
        }
    }

    if (index === -1) invalid_url = true;

    return (
        <div>
            {(invalid_url || error) && 
                <Redirect to="/notfound"/>
            }
            {loading &&
                <ViewAllLoader/>
            }
            {(!loading && !error) && 
                <ViewAllView decks={data.decks} title={named_views[index]} history={props.history}/>
            }
        </div>
    )
}
