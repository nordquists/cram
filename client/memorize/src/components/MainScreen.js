import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavSidebar from "./NavSidebar";
import StudyBrowseTable from "./StudyBrowseTable";

class MainScreen extends Component {
    render() {
        const DECKS = [
            {name: 'Deck 1'},
            {name: 'Deck 2'},
            {name: 'Deck 3'},
            {name: 'Deck 4'},
        ];

        const studyScreen = {
            rows: [
                {
                    header: "Recently Studied",
                    decks: DECKS
                }
            ]
        }

        return(
            <Container>
                <Row>
                    <Col xs="3">
                        <NavSidebar/>
                    </Col>
                    <Col>
                        <StudyBrowseTable input={studyScreen}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default MainScreen