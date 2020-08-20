import React from "react";
import styled from 'styled-components'
import '../LoadingComponent/loadingSpinner.css';
import ContentLoader from "react-content-loader"


const Card = styled.div`
    background-color: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.12);
    
    margin: 0;
    padding: 3rem;
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);

    transition: -webkit-transform 0.3s ease-in-out, -webkit-backface-visibility 0s ease-in-out;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(${props => props.flipped ? "180deg" : "0"});

    word-break: break-word;

    display: flex;
    justify-content: center;
    align-items: center;
`

const LoadingFlashcard = () => {
    return (
        <Card>
            <ContentLoader 
                speed={2}
                width={230}
                height={107}
                viewBox="0 0 230 107"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                >
                <rect x="42" y="2" rx="0" ry="0" width="151" height="18" /> 
                <rect x="3" y="31" rx="0" ry="0" width="239" height="18" /> 
                <rect x="4" y="59" rx="0" ry="0" width="239" height="18" /> 
                <rect x="46" y="88" rx="0" ry="0" width="151" height="18" />
            </ContentLoader>
        </Card>
    );
}

export default LoadingFlashcard;