import React, { Component } from 'react';
import StudyBrowseRow from './StudyBrowseRow'
import { Row } from 'reactstrap';

class StudyBrowseTable extends Component {
    render() {
        const row1 = this.props.input.rows[0];
        return(
            <StudyBrowseRow row={row1}/>
        );
    }
}

export default StudyBrowseTable;