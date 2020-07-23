import { BROWSE_LOAD } from "../actions/types";

const example_rows = [
    {
        subtitle: "Most Popular Decks",
        decks: [
            {
                id: "1",
                name: "My first deck"
            },
            {
                id: "2",
                name: "My second deck"
            },
            {
                id: "3",
                name: "My third deck"
            }
        ]
    },
    {
        subtitle: "Recommended Decks",
        decks: [
            {
                id: "1",
                name: "My first deck"
            },
            {
                id: "2",
                name: "My second deck"
            },
            {
                id: "3",
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