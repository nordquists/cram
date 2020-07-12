import React, { Component } from 'react';
import { Col } from 'reactstrap';

class StudyBrowseCardsRowElement extends Component {
    render(){
        const deck = this.props.deck.name;

        return(
            <Col style={{backgroundColor:"grey"}}>
                <h3>{deck}</h3>
            </Col>
        );
    }
}

export default StudyBrowseCardsRowElement;