import React from 'react'
import Row from './Row';

export const Table = (props) => {
    const { loading, payload, error } = props.data;
    const rows_render = [];

    if(!loading){
        const { rows } = payload[0];

        rows.forEach((row) => {
            rows_render.push(
                <Row title={row.title} elements={row.elements}/>
            );
        });
    }

    return (
        <div>
            {!loading && rows_render}
        </div>
    )
}
