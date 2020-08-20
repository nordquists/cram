import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from 'react-router-dom';
import { DeckPreview } from '../../component/DeckPreviewComponent/DeckPreview';
import { StatsPreview } from '../../component/StatsComponent/StatsPreview';
import { CardTable } from '../../component/CardTableComponent/CardTable';
import { UIRoundButton } from '../../component/UIComponents/UIRoundButton';
import {ReactComponent as PencilIcon} from '../../icons/pencil.svg';
import { UIBackButton } from '../../component/UIComponents/UIBackButton';
import {Helmet} from "react-helmet";

const Deck = styled.div`
    padding-top: 20px;

    width: 40rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
    
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;

    margin-bottom: 15px;
    height: 40px;
`

const Heading = styled.div`
    margin-bottom: 20px;
`

const Title = styled.h1`
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: bold;
    color: #000000;

    margin: 0;

`

const Description = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    color: #B4B2B2;

    margin: 0;

`

const StatsPreviewContainer = styled.div`
    margin-top: 40px;
`

const DeckPreviewContainer = styled.div`
    width: 40rem;
    height: 20rem;

    ${media.lessThan("medium")`
        width: 90vw;
        height: 27vh
    `}
`

const Container = styled.div`
    margin-bottom: 10px;
`

const Byline = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 22px;

    color: #515151;
    text-align: right;

    margin-right: 10px;
`

const Creator = styled.span`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 22px;

    color: #515151;
`

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const CardTableContainer = styled.div`
    width: 40rem;

    ${media.lessThan("medium")`
        width: 90vw;
    `}
`

const Divider = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;

    border-width: 0;
    border-top: 2px solid #eee;
`

const Pencil = styled(PencilIcon)`
    margin: 0;
    stroke: #515151;
    width: 22px;
    height: 22px;
    top: 0.25rem;
    left: 0.3rem;
    position: absolute;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

export const DeckView = ({ loading, data, error }) => {
    return (
        <div>
            <Helmet>
                <title>{data.title} | Cram</title>
                <link rel="canonical" href="http://usecram.com/" />
            </Helmet>
            <Deck>
                <Header>
                    <StyledLink to={`/home`}><UIBackButton/></StyledLink>
                </Header>
                <Heading>
                    <Title>{ data.title }</Title>
                    <Description>{ data.description }</Description>
                    <Actions>
                        <>
                        <Byline>Created by <Creator>{data.creator}</Creator></Byline>
                        {data.is_owner && <Link to={`/${data.deck_id}/edit`}><UIRoundButton text={<Pencil/>}/></Link>}
                        </>
                    </Actions>
                </Heading>
                <DeckPreviewContainer>
                    <DeckPreview deck={data.cards}/>
                </DeckPreviewContainer>
                <StatsPreviewContainer>
                    <StatsPreview width={100} terms_to_learn={32} update_color={"green"} update_num={"20"} id={data.deck_id} green={data.percentages.green * 100} orange={data.percentages.orange * 100} red={data.percentages.red * 100}/>
                </StatsPreviewContainer>
                <Container>
                    <Divider/>
                </Container>
                
                <CardTableContainer>
                    <CardTable cards={data.cards}/>
                </CardTableContainer>

                
            </Deck>
        </div>
    )
}
