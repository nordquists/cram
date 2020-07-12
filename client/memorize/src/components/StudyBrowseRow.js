import React, { Component } from 'react';
import StudyBrowseCardsRowHeader from "./StudyBrowseCardsRowHeader"
import StudyBrowseCardsRowElement from "./StudyBrowseCardsRowElement"
import { Row } from 'reactstrap';

class StudyBrowseCardsRow extends Component {
    render() {
        const elements = [];

        const headerText = this.props.row.header
        this.props.row.decks.forEach((deck) => {
            elements.push(
                <StudyBrowseCardsRowElement deck={deck} key={deck.name}/>
            );
        });

        return(
            <div>
                <StudyBrowseCardsRowHeader text={headerText}/>
                <Row>
                    {elements}
                </Row>
            </div>
        );
    }
}

export default StudyBrowseCardsRow;