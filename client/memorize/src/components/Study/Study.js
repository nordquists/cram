import React, {Component, useEffect, useState} from 'react';
import Flashcard from './Flashcard';
import ProgressBar from './ProgressBar';
import ButtonRow from './ButtonRow';
import '../../index.css';
import Deck from "./Deck";
import { connect } from 'react-redux';
import { getDeck, studyAdvance } from "../../actions/studyActions";
import PropTypes from 'prop-types';


class Study extends Component {

    componentDidMount() {
        this.props.getDeck();
    }

    render() {
        const { queue, percentages, index } = this.props.study;

        console.log(percentages);

        return (
            <div className="wrapper">
                <ProgressBar percentages={percentages}/>
                <Deck deck={queue} index={index}/>
                <ButtonRow/>
            </div>
        );
    }
}

Study.propTypes = {
    getDeck: PropTypes.func.isRequired,
    study: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    study: state.study
});

export default connect(mapStateToProps, { getDeck, studyAdvance })(Study);