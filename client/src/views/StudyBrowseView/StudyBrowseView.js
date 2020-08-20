import React from 'react'
import styled from 'styled-components';
import { StudyNext } from '../../component/StudyNextComponent/StudyNext';
import { BrowseTable } from '../../component/BrowseComponent/BrowseTable';
import {Helmet} from "react-helmet";

const StudyBrowse = styled.div`
    padding-top: 20px;

`

export const StudyBrowseView = ({ loading, data, error }) => {
    return (
        <div>
            <Helmet>
                <title>Home | Cram</title>
                <link rel="canonical" href="http://usecram.com/home" />
            </Helmet>
            {!loading && 
                <StudyBrowse>
                    <StudyNext upNext={data.upNext}/>
                    <BrowseTable rows={data.rows}/>
                </StudyBrowse>
            }
            {loading && 
                "Placeholder"
            }
        </div>
    )
}
