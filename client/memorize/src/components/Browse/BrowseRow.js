import React, { Component } from 'react';
import BrowseRowElement from "./BrowseRowElement";

const BrowseRow = (props) => {
    const elements = [];
    props.decks.forEach((deck) => {
        elements.push(
            <BrowseRowElement name={deck.name}/>
        );
    });

    return (
        <div className="browse-row">
            <div className="row">
                <h3 className="subtitle">{props.subtitle}</h3>
                <div className="buttons">
                    <button className="nav"/>
                    <button className="nav"/>
                </div>
            </div>
            <div className="row">
                {elements}
            </div>
        </div>
    );
}

export default BrowseRow;