import {STUDY_GET_QUEUE, STUDY_ADVANCE} from "./types";

export const getQueue = () => {
    return {
        type: STUDY_GET_QUEUE
    };
}

export const studyAdvance = (color) => {
    return {
        type: STUDY_ADVANCE,
        value: color
    };
}