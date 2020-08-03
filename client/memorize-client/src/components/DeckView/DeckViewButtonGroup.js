import React from 'react'
import { StatsCircle } from '../Stats/StatsCircle';


export const DeckViewButtonGroup = ({ percentages, id }) => {
    return (
        <div className="deck-view-button-group">
            {/* <h5>STUDY</h5> */}
            <div className="deck-view-button-group-flex">
                <div className="desktop-stats">
                    <StatsCircle
                        width={'100%'}
                        red={percentages.red}
                        orange={percentages.orange}
                        green={percentages.green}
                        hasInternalLabel={true}
                    />
                </div>
                <div className="buttons">
                    <button>Study</button>
                    <button>Flashcards</button>
                </div>

            </div>
        </div>
        
    )
}
