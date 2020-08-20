import React from 'react'
import { UILink } from './UILink'
import { ReactComponent as LeftChevron } from '../../icons/chevron-left.svg'
import styled from 'styled-components';

const BackButton = styled(LeftChevron)`
    position: relative;
    top: .4em;
    margin: 0;

    width: 1.4rem;
    height: 1.4rem;

    stroke: #A9A9A9;
    fill: none;
`

export const UIBackButton = ({ onBack }) => {
    return (
        <UILink linkText={"Back"} svgLeft={<BackButton/>} onClick={onBack}/>
    )
}
