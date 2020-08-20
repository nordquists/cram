import React from 'react'
import { HomeNav } from '../../component/HomeComponents/HomeNav';
import { Splash } from '../../component/HomeComponents/Splash';
import { Footer } from '../../component/HomeComponents/Footer';
import { SuperFooter } from '../../component/HomeComponents/SuperFooter';
import styled from 'styled-components';
import {Helmet} from "react-helmet";
import { Showcase } from '../../component/HomeComponents/Showcase';

const Body = styled.div`
`

export const HomeView = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cram</title>
                <link rel="canonical" href="http://usecram.com/" />
            </Helmet>
            <Body>
                <HomeNav/>
                <Splash/>
                <Showcase/>
                <SuperFooter/>
                <Footer/>
            </Body>
        </div>
    )
}
