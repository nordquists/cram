import React, {useState, useEffect} from 'react';
import Resource from '../Resource';
import DeckView from './DeckView';

const DeckViewContainer = (props) => {

    useEffect(() => {
        let id = props.match.params.deck_id;
    });

    return (
        // TODO placeholder values
        <Resource
            path="deck/id"
            render={ payload => (
                <DeckView data={payload}/>
            )}
        />
    );
}

export default DeckViewContainer;