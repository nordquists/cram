import React from 'react'
import { StudyBrowseViewLoader } from './StudyBrowseViewLoader'
import { StudyBrowseView } from './StudyBrowseView'
import { Redirect } from 'react-router-dom';
import { useApi } from '../../hooks/useAPI';

export const StudyBrowseViewContainer = () => {
    const { loading, data, error } = useApi('/browse/study');

    return (
        <div>
            {(error) && 
                <Redirect to="/unexpected"/>
            }
            {loading &&
                <StudyBrowseViewLoader/>
            }
            {(!loading && !error) && 
                <StudyBrowseView loading={false} data={data} error={null}/>
            }
        </div>
    )
}
