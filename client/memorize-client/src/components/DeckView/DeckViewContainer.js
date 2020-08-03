import React from 'react';
import Resource from '../Resource';
import DeckView from './DeckView';


const DeckViewContainer = (props) => {
    const id = props.match.params.deck_id;

    let onBack =  (e) => {
        props.history.goBack();
    }

    return (
        // TODO placeholder values
        <Resource
            path="deck/id"
            render={ payload => (
                <DeckView data={payload.payload} error={payload.error} loading={payload.loading} onBack={onBack}/>
            )}
        />
    );
}

export default DeckViewContainer;