import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import useKeyPress from "../../hooks/useKeyPress";
import media from "styled-media-query";

const Card = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.12);
    
    margin: 0;
    padding: 3rem;
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);

    transition: -webkit-transform 0.3s ease-in-out, -webkit-backface-visibility 0s ease-in-out;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(${props => props.flipped ? "180deg" : "0"});

    word-break: break-word;
`


const Term = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;

    color: #222;

    display: flex;
    align-items: center;

    width: inherit;
    height: inherit;
    align-items: center;
    justify-content: center;

    position: absolute;
    backface-visibility: hidden;
    ${media.lessThan("small")`
        font-size: 1rem;

    `}
    `
const Definition = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;

    color: #222;

    display: flex;

    width: inherit;
    height: inherit;
    align-items: center;
    justify-content: center;

    position: absolute;
    backface-visibility: hidden;
    transform: rotateX(180deg) translateZ(1px);

    ${media.lessThan("small")`
        font-size: 1rem;

    `}
    `

const Flashcard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);
    const downPress = useKeyPress("ArrowDown")
    const upPress = useKeyPress("ArrowUp")
    const fPress = useKeyPress("f")
    
    useEffect(() => {
        if (downPress || upPress || fPress) {
            setFlipped(!flipped)
        }
    }, [downPress, upPress, fPress]);
    

    return (
        <Card flipped={flipped} onClick={() => setFlipped(!flipped)}>
            <Term>
                {card.front}
            </Term>
            <Definition> 
                {card.back}
            </Definition>
        </Card>
    );
}

export default Flashcard;