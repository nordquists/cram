import React from 'react'
import styled from 'styled-components';
import ContentLoader from "react-content-loader"
import { UIH4 } from '../../UIComponents/UIH4';
import { StatsCircleLoader } from '../../StatsComponent/Loader/StatsCircleLoader';

const Next = styled.div`
    width: 300px
`

const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 1rem;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    
    margin-top: 0.5rem;
    margin-left: 1rem;
`

const ButtonContainer = styled.div`
    position: absolute;
    left: 1rem;    
    bottom: 1rem;
`

const Heading = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 13px;
`

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

export const StudyNextCurrentLoader = () => {
    return (
        <Next>
            <Heading>
                <UIH4 text={"Up Next"}/>
            </Heading>
            <Flex>
                <StatsCircleLoader/>
                <TitleArea>
                    
                </TitleArea>
            </Flex>
            <ButtonContainer>
                <ButtonLoader/>
            </ButtonContainer>
        </Next>
    )
}
