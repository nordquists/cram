import React from 'react'
import { FirstTimeView } from './FirstTimeView'
import { Redirect } from 'react-router-dom'
import { LoadingSpinner } from '../../component/LoadingComponent/LoadingSpinner';
import { useApi } from '../../hooks/useAPI';

export const FirstTimeViewContainer = (props) => {
    const { loading, data, error } = useApi('/users/check-login');

    return (
        <div>
            {(!loading && data.new) && 
                <FirstTimeView history={props.history}/>
            }
            {(!loading && !data.new) && <Redirect to={'/'}/>}
            {loading && <LoadingSpinner/>}
        </div>
    )
}