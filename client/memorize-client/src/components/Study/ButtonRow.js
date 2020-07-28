import React from "react";
import {studyAdvance} from "../../actions/studyActions";
import {connect} from "react-redux";

const ButtonRow = (props) => {

    const onPress = (color) => {
        props.studyAdvance(color);
    }

    return (
        <div className="button-row">
            <button className={'button'} id={'red-button'} onClick={() => onPress('red')}/>
            <button className={'button'} id={'orange-button'} onClick={() => onPress('orange')}/>
            <button className={'button'} id={'green-button'} onClick={() => onPress('green')}/>
        </div>
    );
}


const mapStateToProps = (state) => ({
    study: state.study
});


export default connect(mapStateToProps, { studyAdvance })(ButtonRow);