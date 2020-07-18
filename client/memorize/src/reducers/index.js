import { combineReducers } from "redux";
import studyReducer from './studyReducer';

export default combineReducers({
    study: studyReducer
});