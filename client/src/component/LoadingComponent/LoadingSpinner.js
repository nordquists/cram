import React from 'react'
import './loadingSpinner.css';
import styled from 'styled-components';

const Flex = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingSpinner = () => {
    return (
        <Flex>
            <div className="sbl-circ-path"></div>
        </Flex>
    )
}
