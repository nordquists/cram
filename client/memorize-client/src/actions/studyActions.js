import {GET_DECK, STUDY_ADVANCE_GREEN, STUDY_ADVANCE_ORANGE, STUDY_ADVANCE_RED} from "./types";

export const getDeck = () => {
    return {
        type: GET_DECK
    };
}

export const studyAdvance = (color) => {
    if (color === 'red'){
        return {
            type: STUDY_ADVANCE_RED,
        };
    } else if (color === 'orange'){
        return {
            type: STUDY_ADVANCE_ORANGE,
        };
    } else if (color === 'green'){
        return {
            type: STUDY_ADVANCE_GREEN,
        };
    }
}