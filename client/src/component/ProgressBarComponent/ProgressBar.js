import React from "react";
import styled from 'styled-components';

const OuterBar = styled.div`
    background-color: #E4E4E4;
    height: 8px;
    width: 100%;
    border-radius: 4px;
    margin: 20px;

    margin-right: auto;
    margin-left: auto;
`

const Inner = styled.div`
    border-radius: inherit;
    height: inherit;
    transition: width 1s ease-in-out;
    width: ${props => props.percentage}%;
`

const GreenInner = styled(Inner)`
    z-index: 3;
    background-color: #7ACB5E;
`

const OrangeInner = styled(Inner)`
    z-index: 2;
    background-color: #F1B458;
    margin-top: -8px;
`

const RedInner = styled(Inner)`
    z-index: 1;
    background-color: #E88383;
    margin-top: -8px;   
`
 
const ProgressBar = ({ counts, length }) => {
    const { green, orange, red } = counts;

    return (
        <OuterBar>
            <GreenInner percentage={(green + orange + red) / length * 100}/>
            <OrangeInner percentage={(orange + red) / length * 100}/>
            <RedInner percentage={(red) / length * 100}/>
        </OuterBar>
    );
}


export default ProgressBar;