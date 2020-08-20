import React from "react"
import ContentLoader from "react-content-loader"
import styled from 'styled-components'
import media from "styled-media-query"

const Element = styled.div`
    background: #FFF;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);

    display: inline-block;
    height: 170px;
    width: 150px;

    margin-right: 10px;
    margin-bottom: 10px;

    
    ${media.lessThan("medium")`
        flex: 0 0 auto; 
        flex-basis: calc(50% - 15px);

    `}
`

const BrowseElementLoader = (props) => (
    <Element>
        <ContentLoader 
            speed={2}
            width={150}
            height={170}
            viewBox="0 0 150 170"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="116" y="170" rx="3" ry="3" width="150" height="170" /> 
            <circle cx="38" cy="37" r="23" /> 
            <rect x="223" y="108" rx="0" ry="0" width="117" height="20" /> 
            <rect x="83" y="128" rx="0" ry="0" width="1" height="1" /> 
            <rect x="15" y="146" rx="0" ry="0" width="71" height="10" /> 
            <rect x="15" y="100" rx="0" ry="0" width="115" height="13" /> 
            <rect x="14" y="123" rx="0" ry="0" width="115" height="13" />
        </ContentLoader>
    </Element>
)

export default BrowseElementLoader;
