import React from "react";
import {studyAdvance} from "../../actions/studyActions";
import {connect} from "react-redux";

const RED_PERFORMANCE = 0;
const ORANGE_PERFORMANCE = 0.5;
const GREEN_PERFORMANCE = 1;

const ButtonRow = ({ handleAdvance, index }) => {

    return (
        <div className="button-row">
            <button className={'button'} id={'red-button'} onClick={() => handleAdvance(index, RED_PERFORMANCE)}/>
            <button className={'button'} id={'orange-button'} onClick={() => handleAdvance(index, ORANGE_PERFORMANCE)}/>
            <button className={'button'} id={'green-button'} onClick={() => handleAdvance(index, GREEN_PERFORMANCE)}/>
        </div>
    );
}

export default ButtonRow;