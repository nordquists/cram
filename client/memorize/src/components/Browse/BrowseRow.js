import React, { Component } from 'react';
import BrowseRowElement from "./BrowseRowElement";

class BrowseRow extends Component {
    render() {
        return(
            <div className="browse-row">
                <div className="row">
                    <h3 className="subtitle">Most Popular</h3>
                    <div className="buttons">
                        <button className="nav"/>
                        <button className="nav"/>
                    </div>
                </div>
                <div className="row">
                    <BrowseRowElement/>
                    <BrowseRowElement/>
                    <BrowseRowElement/>
                    <BrowseRowElement/>
                </div>
            </div>
        );
    }
}

export default BrowseRow;