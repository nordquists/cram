import { useEffect, useReducer } from "react";
import { updateMemItem, shouldAppendToQueue, initQueue } from '../utility/SM';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function studyReducer(state, action) {
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
        case 'SAVED':
            return {
                ...state,
                saving: false,
                saved: true,
                percentages: action.payload.percentages
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
        case 'INIT_SET':
            return {
                ...state,
                set: action.payload
            }
        case 'INIT_SET_AND_QUEUE':
            return {
                ...state,
                set: action.payload,
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
                set: [
                    ...state.set.slice(0, state.current),
                    {
                        ...state.set[state.current],
                        difficulty: action.payload.difficulty,
                        days_between_review: action.payload.days_between_review,
                        last_studied: action.payload.last_studied,
                        times_studied: state.set[state.current].times_studied + 1
                    },
                    ...state.set.slice(state.current + 1)
                ]
            }
        case 'UPDATE_COUNTS': 
            if (state.counts['green'] + state.counts['orange'] + state.counts['red'] + 1 <= state.set.length) {
                return {
                    ...state,
                    counts: {
                        ...state.counts,
                        [action.payload] : state.counts[action.payload] + 1
                    }
                }
            } else {
                return state;
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

const initialState = {
    counts: {
        red: 0,
        orange: 0,
        green: 0
    },
    set: [],
    current: null,
    startTime: null,
    queue: [], // stores index of card in set
    index: 0,
    time: 0,
    loading: true,
    loaded: false,
    saving: false,
    saved: false,
    finished: false,
    error: null,
    percentages: {
        red: 0,
        orange: 0,
        green: 0
    }
}

export const useStudy = function(deck_id) {
    const [state, dispatch] = useReducer(studyReducer, initialState);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        if(state.finished) {
            let source = axios.CancelToken.source();
            handleSave();
            return () => {
                source.cancel("Cancelling in cleanup");
            }
        }  
    }, [state.finished])

    async function init() {
        dispatch({ type: 'LOADING' });
        // get our deck and stats
        await getDeck()
    }

    async function getDeck() {
        const accessToken = await getAccessTokenSilently();

        axios({
            method: 'get',
            url: '/api/decks/study/'.concat(deck_id),
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        }).then((res) => {
            dispatch({
                type: "INIT_SET",
                payload: res.data.cards
            })
            const queue = initQueue(res.data.cards)
            dispatch({
                type: "INIT_QUEUE",
                payload: queue
            })
            dispatch({ type: 'LOADED' });
        }).catch(error => {
            console.log(error);
            dispatch({
                type: "ERROR",
                payload: error
            })
        })
        return
    }

    async function handleSave() {
        dispatch({ type: 'SAVING' });
        const accessToken = await getAccessTokenSilently();

        axios({
            method: 'patch',
            url: '/api/decks/stats/'.concat(deck_id),
            data: {
                cards: state.set
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        }).then((res) => {
            dispatch({ 
                type: 'SAVED',
                payload: res.data
            });
        }).catch(error => {
            console.log(error);
            dispatch({
                type: "ERROR",
                payload: error
            })
        })
    }

    const handleAdvance = (itemIndex, performance) => {
        // update the card with performance given by user
        const payload = updateMemItem(itemIndex,
                                state.set[itemIndex].difficulty, 
                                state.set[itemIndex].last_studied, 
                                state.set[itemIndex].days_between_review, 
                                performance)
        dispatch({
            type: 'UPDATE_ITEM',
            payload: payload
        });

        // update counts
        if(payload.difficulty >= 1) {
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
        if(shouldAppendToQueue(state.set[itemIndex].last_studied, state.set[itemIndex].days_between_review)) {
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
        } else {
            // advance our index by one
            dispatch({ type: 'ADVANCE' });
        }
    }

    return {
        state,
        handleAdvance,
        init
    }
}

export default useStudy;