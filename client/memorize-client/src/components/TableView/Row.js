import React from 'react'
import { RowElement } from './RowElement';

const MAX_ELEMENTS = 4;

export const Row = ({ title, elements }) => {

    const row_elements = [];
    elements.forEach((item) => {
        row_elements.push(
            <RowElement element={item}/>
        );
    });

    return (
        <div className="browse-row">
            <div className="row">
                <h3 className="subtitle">{title}</h3>
            </div>
            <div className="row">
                {row_elements}
            </div>
        </div>
    )
}

export default Row;