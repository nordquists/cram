import React from 'react'
import styled from 'styled-components';
import { CardElementLoader } from './CardElementLoader';
import ContentLoader from "react-content-loader"

const Table = styled.div``

const Heading = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #5E5E5E;

    margin-bottom: 10px;
`

const HeaderLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={200}
      height={20}
      viewBox="0 0 200 20"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="200" height="20" />
    </ContentLoader>
  )

export const CardTableLoader = ({ cards }) => {
    const elements = [];
    for (var i = 0; i < 3; i++) {
        elements.push(
            <CardElementLoader/>
        );
    }
    return (
        <Table>
            <Heading>
                <HeaderLoader/>
            </Heading>
            {elements}
        </Table>
    )
}
