import React from 'react'
import { CreateView } from './CreateView'

export const CreateViewContainer = (props) => {
    return (
        <CreateView loading={false} data={null} error={null} history={props.history}/>
    )
}
