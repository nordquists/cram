import React from 'react'
import styled from 'styled-components';
import media from "styled-media-query";


const PhoneBody = styled.div`
    background: #FFFFFF;
    border: 7px solid #000000;
    box-sizing: border-box;
    border-radius: 50px;

    height: 660px;
    width: 325px;


    ${media.lessThan("940px")`
        height: 600px;
        width: 300px;
        border: 5px solid #000000;
        box-sizing: border-box;
        border-radius: 40px;
    `}
`


export const Phone = () => {
    return (
        <PhoneBody>


        </PhoneBody>
    )
}
