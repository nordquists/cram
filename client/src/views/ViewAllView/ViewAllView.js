import React from 'react'
import styled from 'styled-components';
import { BrowseCategory } from '../../component/BrowseComponent/BrowseCategory';
import {Helmet} from "react-helmet";

const ViewAll = styled.div`
    padding-top: 20px;

`

export const ViewAllView = ({ decks, title, history }) => {
    return (
        <ViewAll>
            <Helmet>
                <title>{title} | Cram</title>
                <link rel="canonical" href="http://usecram.com/home" />
            </Helmet>
            <BrowseCategory title={title} decks={decks} history={history}/>
        </ViewAll>
    )
}
