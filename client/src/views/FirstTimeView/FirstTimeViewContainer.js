import React from 'react'
import { FirstTimeView } from './FirstTimeView'
import { Redirect } from 'react-router-dom'
import { LoadingSpinner } from '../../component/LoadingComponent/LoadingSpinner';
import { useApi } from '../../hooks/useAPI';

export const FirstTimeViewContainer = (props) => {
    const { loading, data, error } = useApi('/api/users/check-login');

    return (
        <div>
            {(!error && !loading && data.new) && 
                <FirstTimeView history={props.history}/>
            }
            {(!loading && !data.new) && <Redirect to={'/'}/>}
            {loading && <LoadingSpinner/>}
            {error && <Redirect to={'/unexpected'}/>}
        </div>
    )
}
