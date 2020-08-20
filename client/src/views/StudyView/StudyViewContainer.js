import React, { useEffect } from 'react';
import useStudy from '../../hooks/useStudy';
import StudyView from './StudyView';
import axios from 'axios';
import { StudyViewFinished } from './StudyViewFinished';
import { Redirect } from 'react-router-dom';

export const StudyViewContainer = (props) => {
    const id = props.match.params.deck_id;
    const { state, handleAdvance, init } = useStudy(id);
    useEffect(() => {
        let source = axios.CancelToken.source();
        async function callInit() {
            await init();
        }
        callInit();
        return function () {
            source.cancel("Cancelling in cleanup");
        };
    }, [])
    
    return (
        <div>
            {state.error && 
                <Redirect to="/notfound"/>
            }
            {(!state.finished) && 
                <StudyView
                    key={state.index}
                    loading={state.loading}
                    current={state.set[state.current]}
                    index={state.current}
                    counts={state.counts}
                    length={state.set.length}
                    handleAdvance={handleAdvance}
                    id={id}
                />
            }
            {(!state.loading && state.finished) &&
                <StudyViewFinished
                    numberOfCards={state.set.length}
                    percentages={state.percentages}
                    counts={state.counts}
                    id={id}
                />
            }
        </div>
    )
}
