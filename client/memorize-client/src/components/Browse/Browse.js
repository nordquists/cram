import React, { Component } from "react";
import BrowseRow from "./BrowseRow";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Browse extends Component {

    componentDidMount() {
        // this.props.browseLoad();
    }

    render() {
        const { rows } = this.props.browse;

        const rows_render = [];
        rows.forEach((row) => {
            rows_render.push(
                <BrowseRow subtitle={row.subtitle} decks={row.decks}/>
            );
        });

        return (
            <div className="browse">
                {rows_render}
            </div>
        );
    }
}

Browse.propTypes = {
    browseLoad: PropTypes.func.isRequired,
    browse: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    browse: state.browse
});

// export default connect(mapStateToProps, { browseLoad })(Browse);