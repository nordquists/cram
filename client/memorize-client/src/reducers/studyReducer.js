import {STUDY_GET_QUEUE, STUDY_ADVANCE, STUDY_ADVANCE_GREEN, STUDY_ADVANCE_ORANGE, STUDY_ADVANCE_RED} from "../actions/types";

const SAMPLE_DECK = [
    {
        id: '6e009546-96dc-41c2-9d56-ad05d01f815c',
        difficulty: 0.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front',
        back: 'back'
    },
    {
        id: 'a7776b0b-d0e0-451f-9492-397cae160558',
        difficulty: 0.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 'd8a4b66c-94ae-407a-8653-50e32629dddf',
        difficulty: 0.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front3',
        back: 'back3'
    },
    {
        id: '2a86277d-cfbd-48a8-bc53-3fae61842a62',
        difficulty: 0.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
        front: 'front4',
        back: 'back4'
    },
    {
        id: '8f317aac-62a0-498e-bc58-bf7fe4b014b7',
        difficulty: 0.5,
        days_between_review: null,
        last_test: null,
        probability: null,
        reviews: 0,
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
    set: SAMPLE_DECK,
    current: null,
    queue1: [], // stores index of card in set
    queue2: [],
    index: 0,
    time: 0,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case STUDY_GET_QUEUE:
            return {
                ...state
            }
        case STUDY_ADVANCE:
            



            return {
                ...state,
                index: state.index + 1,
                
                

                percentages: {
                    red: (state.red.length + 1) / (state.set.length) * 100,
                    orange: (state.orange.length) / (state.set.length) * 100,
                    green: (state.green.length) / (state.set.length) * 100
                }
            }
        default:
            return state;
    }
}