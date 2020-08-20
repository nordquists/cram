import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoadingSpinner } from '../LoadingComponent/LoadingSpinner';
import { useApi } from '../../hooks/useAPI';

export const LoginCheck = () => {
    const { loading, data, error } = useApi('/users/check-login');
    return (
        <div>
            {!loading && <Redirect to={data.new ? '/welcome' : '/'}/>}
            {loading && <LoadingSpinner/>}
        </div>
    )
}
