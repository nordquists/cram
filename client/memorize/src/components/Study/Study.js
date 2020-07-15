import React, {Component, useEffect, useState} from 'react';
import Flashcard from './Flashcard';
import ProgressBar from './ProgressBar';
import ButtonRow from './ButtonRow';
import '../../index.css';
import Deck from "./Deck";

const SAMPLE_PERCENTAGES = {
    red: 20,
    orange: 5,
    green: 20
}

const SAMPLE_DECK = [
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    }
]

class Study extends Component {
    constructor(props) {
        super(props);

        this.state = {
            percentages: {
                red: 0,
                orange: 0,
                green: 0
            },
            categories: {
                red: [],
                orange: [],
                green: [],
            },
            deck: SAMPLE_DECK,
            index: 0,
        }

        this.advanceIndex = this.advanceIndex.bind(this);
        this.calculatePercentages = this.calculatePercentages.bind(this);
    }

    calculatePercentages() {

    }

    advanceIndex(button_pressed) {
        if(button_pressed === 'g') {
            var newGreen = this.state.categories.green
            newGreen.push(this.state.index)
            this.setState({
                categories: {
                    green: newGreen
                }
            })
        } else if(button_pressed === 'o') {
            // this.state.categories.orange.push(this.state.index);
        } else if (button_pressed === 'r') {
            // this.state.categories.red.push(this.state.index);
        }
        this.setState({index: this.state.index + 1})
        // console.log(this.state.index);
        this.calculatePercentages();
    }

    render() {
        return (
            <div className="wrapper">
                <ProgressBar percentages={this.state.percentages}/>
                <Deck deck={this.state.deck} index={this.state.index}/>
                <ButtonRow advanceIndex={this.advanceIndex.bind(this, arguments)}/>
            </div>
        );
    }

}

export default Study;