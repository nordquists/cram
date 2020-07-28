import { combineReducers } from "redux";
import studyReducer from './studyReducer';
import browseReducer from './browseReducer';


export default combineReducers({
    study: studyReducer,
    browse: browseReducer
});