import React, {useState, useEffect} from 'react';
import BrowseRow from '../Browse/BrowseRow'
import ClosableCard from './ClosableCard'

const StudyBrowse = (props) => {
    const { loading, payload, error } = props.data;
    console.log(payload)

    // stats for the week
    // closable pop up that recommends you continue studying with a graph of how much there is to learn
        // says something like "stay on track!"
    // recent decks (view more)
    // pinned decks (view more)

    const rows_render = [];

    if(!loading){
        const { rows } = payload[0];

        rows.forEach((row) => {
            rows_render.push(
                <BrowseRow subtitle={row.subtitle} decks={row.decks}/>
            );
        });
    }

    return (
        <div className="study-browse">
            <ClosableCard
                render={ () => (
                    <p>boing</p>
                )}
            />

            {!loading && rows_render}

        </div>
    );
}

export default StudyBrowse;