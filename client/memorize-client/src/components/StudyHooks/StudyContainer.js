import React, { useState, useEffect, useReducer } from 'react'
import SM, { updateMemItem, shouldAppendToQueue, initQueue } from '../../utility/SM';
import Study from './Study';

const SAMPLE_DECK = [
    {
        index: 0,
        id: '6e009546-96dc-41c2-9d56-ad05d01f815c',
        difficulty: 2.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front',
        back: 'back'
    },
    {
        index: 1,
        id: 'a7776b0b-d0e0-451f-9492-397cae160558',
        difficulty: 2.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front2',
        back: 'back2'
    },
    {
        index: 2,
        id: 'd8a4b66c-94ae-407a-8653-50e32629dddf',
        difficulty: 2.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front3',
        back: 'back3'
    },
    {
        index: 3,
        id: '2a86277d-cfbd-48a8-bc53-3fae61842a62',
        difficulty: 2.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front4',
        back: 'back4'
    },
    {
        index: 4,
        id: '8f317aac-62a0-498e-bc58-bf7fe4b014b7',
        difficulty: 2.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front5',
        back: 'back5'
    }
]

const initialState = {
    counts: {
        red: 0,
        orange: 0,
        green: 0
    },
    set: SAMPLE_DECK,
    current: null,
    startTime: null,
    queue: [], // stores index of card in set
    index: 0,
    time: 0,
    loading: true,
    loaded: false,
    saving: false,
    saved: false,
    finished: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'LOADED':
            return {
                ...state,
                loading: false,
                loaded: true
            }
        case 'SAVING':
            return {
                ...state,
                saving: true
            }
        case 'SAVING':
            return {
                ...state,
                saving: true,
                saved: true
            }
        case 'ERROR':
            return {
                ...state,
                error: true,
                error_message: action.payload
            }
        case 'INIT_QUEUE':
            return {
                ...state,
                queue: action.payload.slice(1),
                current: action.payload[0]
            }
        case 'APPEND_QUEUE':
            return {
                ...state,
                queue: [
                    ...state.queue,
                    action.payload
                ]
            }
        case 'POP_QUEUE':
            return {
                ...state,
                queue: [
                    ...state.queue.slice(1)
                ],
                current: state.queue[0]
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
                saved: false,
                set: state.set.map(item =>
                    item.index === action.payload.index ? {
                        ...item,
                        difficulty: action.payload.difficulty,
                        days_between_review: action.payload.days_between_review,
                        last_test: action.payload.last_test,
                        reviews: item.reviews + 1
                    } : item)
            }
        case 'UPDATE_COUNTS': 
            return {
                ...state,
                counts: {
                    ...state.counts,
                    [action.payload] : state.counts[action.payload] + 1
                }
            }
        case 'ADVANCE':
            return {
                ...state,
                index: state.index + 1
            }
        case 'FINISHED': 
            return {
                ...state,
                finished: true
            }
        default:
            return state;
    }
}

export const StudyContainer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // ON MOUNT
        dispatch({ type: 'LOADING' });

        // fetch our data :)

        dispatch({ type: 'LOADED'});

        // var queue = [];

        // for(var i = 0; state.set.length; i++) {
        //     queue.push(i);
        // }

        dispatch({
            type: 'INIT_QUEUE',
            payload: [0,1,2,3,4]
        })
    }, [])

    const handleSave = () => {

    }

    const handleAdvance = (itemIndex, performance) => {
        // update the card with performance given by user
        const payload = updateMemItem(itemIndex,
                                state.set[itemIndex].difficulty, 
                                state.set[itemIndex].last_test, 
                                state.set[itemIndex].days_between_review, 
                                performance)
        dispatch({
            type: 'UPDATE_ITEM',
            payload: payload
        });

        // update counts
        if(payload.difficulty >= 2) {
            dispatch({
                type: 'UPDATE_COUNTS',
                payload: 'red'
            })
        } else if(payload.difficulty >= 0.5) {
            dispatch({
                type: 'UPDATE_COUNTS',
                payload: 'orange'
            })
        } else {
            dispatch({
                type: 'UPDATE_COUNTS',
                payload: 'green'
            })
        }
        

        // decide if current card should be re-added to the queue
        if(shouldAppendToQueue()) {
            dispatch({
                type: 'APPEND_QUEUE',
                payload: itemIndex
            });
        }

        // remove the first element from the queue and update our current card
        dispatch({ type: 'POP_QUEUE' });

        // check if we are done
        if(state.queue.length === 0) {
            dispatch({ type: 'FINISHED' });
            handleSave();
        } else {
            // advance our index by one
            dispatch({ type: 'ADVANCE' });
        }
        console.log(state)
    }

    return (
        <div>
            {(!state.loading && !state.finished) && 
                <Study
                key={state.index}
                loading={state.loading}
                current={state.set[state.current]}
                index={state.current}
                counts={state.counts}
                length={state.set.length}
                handleAdvance={handleAdvance}
                onBack={state.index}
            />
            }
            {(!state.loading && state.finished) &&
                <h1>Congratulations you just reviewed!</h1>
            }
        </div>
    )
}

export default StudyContainer;