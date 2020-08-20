import React from 'react'
import { SettingsView } from './SettingsView'
import { Redirect } from 'react-router-dom'

export const SettingsViewContainer = (props) => {
    const error = false;
    return (
        <div>
            {error && 
                <Redirect to="/unexpected"/>
            }
            <SettingsView history={props.history}/>
        </div>
    )
}
