import React from 'react'
import styled from 'styled-components';

export const  NoStatsPreview = () => {
    return (
        <Stats>
            <Heading>
                <UIH4 text={"Study"}/>
            </Heading>
            <StatsFlex>
                <TermsToLearn>You have 30 cards due!</TermsToLearn>
                <StatsCircle width={width} green={green} orange={orange} red={red}/>
                <ButtonArea>
                    <TermsToLearn>Practice {terms_to_learn} cards</TermsToLearn>
                    <Button to={id + '/study'}><UIButton text={"Start Session"}/></Button>
                </ButtonArea>
            </StatsFlex>
        </Stats>
    )
}
