import React from 'react'
import ProgressBar from './ProgressBar';
import ButtonRow from './ButtonRow';
import Card from "./Card";

const Study = (props) => {
    const { loading, current, index, counts, length, handleAdvance, onBack } = props;

    return (
        <div>
            <ProgressBar counts={counts} length={length}/>
            <Card card={current}/>
            <ButtonRow handleAdvance={handleAdvance} index={index}/>
        </div>
    )
}

export default Study;
