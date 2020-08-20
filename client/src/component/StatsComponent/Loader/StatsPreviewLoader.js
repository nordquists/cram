import React from 'react'
import styled from 'styled-components';
import { UIH4 } from '../../UIComponents/UIH4';
import ContentLoader from "react-content-loader"

const Heading = styled.div`

`

const Stats = styled.div`
`

const StatsFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


const ButtonArea = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
`

const StatsLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={100}
      height={100}
      viewBox="0 0 100 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="50" cy="50" r="50" />
    </ContentLoader>
)

const ButtonLoader = (props) => (
<ContentLoader 
    speed={2}
    width={140}
    height={30}
    viewBox="0 0 140 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
>
    <rect x="0" y="0" rx="0" ry="0" width="140" height="30" />
</ContentLoader>
)

export const StatsPreviewLoader = () => {
    return (
        <Stats>
            <Heading>
                <UIH4 text={"Study"}/>
            </Heading>
            <StatsFlex>
                <StatsLoader/>
                <ButtonArea>
                    <ButtonLoader/>
                </ButtonArea>
            </StatsFlex>
        </Stats>
    )
}
