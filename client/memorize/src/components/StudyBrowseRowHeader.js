import React, { Component } from 'react';

class StudyBrowseCardsRowHeader extends Component {
    render() {
        const headerText = this.props.text

        return(
            <p>{headerText}</p>
        );
    }
}

export default StudyBrowseCardsRowHeader;