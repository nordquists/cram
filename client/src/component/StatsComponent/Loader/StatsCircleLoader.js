import React from 'react'
import styled from 'styled-components';
import ContentLoader from "react-content-loader"

const Stats = styled.div`
    
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
      <circle cx="40" cy="40" r="40" />
    </ContentLoader>
)

export const StatsCircleLoader = () => {
    return (
        <Stats>
            <StatsLoader/>
        </Stats>
    )
}
