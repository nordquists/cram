import React, {Component} from 'react';
import Flashcard from './Flashcard';
import ProgressBar from './ProgressBar';
import ButtonRow from './ButtonRow';
import '../../index.css';

const percentages = {
    red: 20,
    orange: 5,
    green: 20
}

class Study extends Component {
    render() {
        return (
            <div className="wrapper">
                <ProgressBar percentage={percentages}/>
                <Flashcard/>
                <ButtonRow/>
            </div>
        );
    }
}

export default Study;