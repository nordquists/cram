import React from 'react'
import styled from 'styled-components';
import ContentLoader from "react-content-loader"

const Card = styled.div`
    width: calc(100% - 40px);

    background: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    margin-bottom: 10px;

    padding: 20px;
`

const Term = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;

    color: #222;
    margin-bottom: 20px;
`

const Definition = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;

    color: #222;
`

const TextLoader = (props) => (
    <ContentLoader 
        speed={2}
        width={300}
        height={20}
        viewBox="0 0 300 20"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="300" height="20" />
    </ContentLoader>
)

export const CardElementLoader = () => {
    return (
        <Card>
            <Term>
                <TextLoader/>
            </Term>
            <Definition>
                <TextLoader/>
            </Definition>
        </Card>
    )
}
