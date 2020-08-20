import React from 'react'
import styled from 'styled-components';
import media from "styled-media-query";
import { BrowseElementViewOnly } from '../BrowseComponent/BrowseElementViewOnly';
import { DeckPreview } from '../DeckPreviewComponent/DeckPreview';

const ShowcaseBody = styled.div`
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 450px;
    width: 100%;

    position: relative;

    ${media.lessThan("940px")`
        min-height: 400px;
    `}
`

const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100%;

    z-index: 10;
`

const ShowcaseFlex = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100%;

    ${media.lessThan("940px")`
        flex-direction: column;
    `}
`

const TitleWrapper = styled.div`
    max-width: 400px;
    width: calc(100% - 4rem);

    margin-top: auto;
    margin-bottom: auto;

    padding: 3rem 2rem;

    ${media.lessThan("940px")`
        margin-left: auto;
        margin-right: auto;
    `}
`

const SectionTitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 125%;

    color: #222;

    margin-bottom: 10px;
`

const SectionSubtitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 125%;

    color: #ADADAD;

    ${media.lessThan("small")`
        font-size: 1.4rem;
    `}
`

const ImageWrapper = styled.div`
    width: max-content;
    margin-left: auto;
    margin-right: auto;
`

const FlashcardWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
    height: 18rem;

    width: calc(100% - 10vw);

    ${media.lessThan("940px")`
        padding-bottom: 60px;
    `}
    ${media.lessThan("small")`
        padding-bottom: 0;
    `}
`

const Table = styled.div`
    width: 320px;
`

const percentages = {
    one: {
        green: 0.30,
        orange: 0.25,
        red: 0.32
    },
    two: {
        green: 0.20,
        orange: 0.19,
        red: 0.12
    },
    three: {
        green: 0.14,
        orange: 0.11,
        red: 0.18
    },
    four: {
        green: 0.34,
        orange: 0.13,
        red: 0.16
    }
}

const deck = [
    {
        front: "Spaced Repetition",
        back: "An evidence-based learning technique usually performed with flashcards."
    },
    {
        front: "How does spaced repetition work?",
        back: "More difficult cards are shown more frequently, and vice versa."
    },
    {
        front: "Sebastian Leitner",
        back: "A scientist and early implementer of spaced repetition."
    }
]

export const Showcase = () => {
    return (
        <div>
            <ShowcaseBody>
                <Wrapper>
                    <ShowcaseFlex>
                        <TitleWrapper>
                            <SectionTitle>
                                Completion Circles
                            </SectionTitle>
                            <SectionSubtitle>
                                Quickly visualize your progress and prioritize decks. 
                            </SectionSubtitle>
                        </TitleWrapper>
                        <ImageWrapper>
                            <Table>
                                <BrowseElementViewOnly percentages={percentages.one} terms={50} title="Capitals on the US States"/>
                                <BrowseElementViewOnly percentages={percentages.two} terms={101} title="Computer Science 101"/>
                                <BrowseElementViewOnly percentages={percentages.three} terms={26} title="Spanish Unit 1"/>
                                <BrowseElementViewOnly percentages={percentages.four} terms={204} title="General Knowledge"/>
                            </Table>
                        </ImageWrapper>
                    </ShowcaseFlex>
                </Wrapper>
            </ShowcaseBody>
            <ShowcaseBody>
                <Wrapper>
                    <ShowcaseFlex>
                        <TitleWrapper>
                            <SectionTitle>
                                Spaced Repetition Algorithm
                            </SectionTitle>
                            <SectionSubtitle>
                                Make quick progress and stretch your memory.
                            </SectionSubtitle>
                        </TitleWrapper>
                        <FlashcardWrapper>
                            <DeckPreview deck={deck}/>
                        </FlashcardWrapper>
                    </ShowcaseFlex>
                </Wrapper>
            </ShowcaseBody>
        </div>
    )
}
