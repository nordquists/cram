import React from 'react'
import { HomeView } from './HomeView'
import { Redirect } from 'react-router-dom'

export const HomeViewContainer = () => {
    const error = false;
    return (
        <div>
            {error && 
                <Redirect to="/unexpected"/>
            }
            <HomeView/>
        </div>
    )
}
