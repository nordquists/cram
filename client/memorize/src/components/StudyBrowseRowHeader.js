import React, { Component } from 'react';

class StudyBrowseRowHeader extends Component {
    render() {
        const headerText = this.props.text

        return(
            <p>{headerText}</p>
        );
    }
}

export default StudyBrowseRowHeader;