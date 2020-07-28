import React from 'react'
import { Table } from './Table'
import Resource from '../Resource'

export const TableContainer = ({ path }) => {

    console.log(path)

    return (
        <Resource
            path={path}
            render={ data => (
                <Table data={data}/>
            )}
        />
    )
}
