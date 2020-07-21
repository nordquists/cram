import { BROWSE_LOAD } from "../actions/types";

const example_rows = [
    {
        subtitle: "Most Popular Decks",
        decks: [
            {
                name: "My first deck"
            },
            {
                name: "My second deck"
            },
            {
                name: "My third deck"
            }
        ]
    },
    {
        subtitle: "Recommended Decks",
        decks: [
            {
                name: "My first deck"
            },
            {
                name: "My second deck"
            },
            {
                name: "My third deck"
            }
        ]
    }
]


const initialState = {
    rows: example_rows
}

export default function(state = initialState, action) {
    switch (action.type) {
        case BROWSE_LOAD:
            return {
                ...state
            }
        default:
            return state;
    }
}