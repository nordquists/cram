import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoadingSpinner } from '../LoadingComponent/LoadingSpinner';
import { useApi } from '../../hooks/useAPI';

export const LoginCheck = () => {
    const { loading, data, error } = useApi('/api/users/check-login');
    return (
        <div>
            {(!error && !loading) && <Redirect to={data.new ? '/welcome' : '/'}/>}
            {loading && <LoadingSpinner/>}
            {error && <Redirect to={'/'}/>}
        </div>
    )
}
