import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

import NavSidebar from './NavSidebar';

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Margin = styled.div`
    width: 45rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
`

const MobileMargin = styled.div`
    padding-bottom: 0;

    ${media.lessThan("medium")`
        padding-bottom: 4.2rem;
    `}
`

export const WithNav = (Component) => {
    return function (props) {
        return (
            <Flex>
                <NavSidebar/>
                <MobileMargin>
                    <Margin>
                        <Component {...props}/>
                    </Margin>
                </MobileMargin>
            </Flex>
        )
    }
}



