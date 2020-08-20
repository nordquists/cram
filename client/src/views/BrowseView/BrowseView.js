import React from 'react'
import styled from 'styled-components';
import { BrowseTable } from '../../component/BrowseComponent/BrowseTable';
import {Helmet} from "react-helmet";

const Browse = styled.div`
    padding-top: 20px;

`

export const BrowseView = ({ loading, data, error}) => {
    return (
        <div>
            <Helmet>
                <title>Browse | Cram</title>
                <link rel="canonical" href="http://usecram.com/browse" />
            </Helmet>
            <Browse>
                <BrowseTable rows={data.rows}/>
            </Browse>
        </div>
    )
}
