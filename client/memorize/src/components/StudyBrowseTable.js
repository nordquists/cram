import React, { Component } from 'react';
import StudyBrowseCardsRow from './StudyBrowseCardsRow'
import { Row } from 'reactstrap';

class StudyBrowseCardsTable extends Component {
    render() {
        const row1 = this.props.input.rows[0];
        return(
            <StudyBrowseCardsRow row={row1}/>
        );
    }
}

export default StudyBrowseCardsTable;