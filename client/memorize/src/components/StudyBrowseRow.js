import React, { Component } from 'react';
import StudyBrowseRowHeader from "./StudyBrowseRowHeader"
import StudyBrowseRowElement from "./StudyBrowseRowElement"
import { Button, Col, Row } from 'reactstrap';

class StudyBrowseRow extends Component {
    render() {
        const elements = [];

        const headerText = this.props.row.header
        this.props.row.decks.forEach((deck) => {
            elements.push(
                <StudyBrowseRowElement deck={deck} key={deck.name}/>
            );
        });

        return(
            <div>
                <Row>
                    <Col><StudyBrowseRowHeader text={headerText}/></Col>
                    <Col><Button color="link">View All</Button></Col>
                </Row>
                <Row>
                    {elements}
                </Row>
            </div>
        );
    }
}

export default StudyBrowseRow;