import {GET_DECK, STUDY_ADVANCE_GREEN, STUDY_ADVANCE_ORANGE, STUDY_ADVANCE_RED} from "../actions/types";

const SAMPLE_DECK = [
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    },
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    },
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    },
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    }
]

const initialState = {
    percentages: {
        red: 0,
        orange: 0,
        green: 0
    },
    red: [],
    orange: [],
    green: [],
    queue: SAMPLE_DECK,
    index: 0,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_DECK:
            return {
                ...state
            }
        case STUDY_ADVANCE_RED:
            return {
                ...state,
                index: state.index + 1,
                red: [...state.red, state.index],
                percentages: {
                    red: (state.red.length + 1) / (state.queue.length) * 100,
                    orange: (state.orange.length) / (state.queue.length) * 100,
                    green: (state.green.length) / (state.queue.length) * 100
                }
            }
        case STUDY_ADVANCE_ORANGE:
            return {
                ...state,
                index: state.index + 1,
                orange: [...state.orange, state.index],
                percentages: {
                    red: (state.red.length) / (state.queue.length) * 100,
                    orange: (state.orange.length + 1) / (state.queue.length) * 100,
                    green: (state.green.length) / (state.queue.length) * 100
                }
            }
        case STUDY_ADVANCE_GREEN:

            return {
                ...state,
                index: state.index + 1,
                green: [...state.green, state.index],
                percentages: {
                    red: (state.red.length) / (state.queue.length) * 100,
                    orange: (state.orange.length) / (state.queue.length) * 100,
                    green: (state.green.length + 1) / (state.queue.length) * 100
                }
            }
        default:
            return state;
    }
}