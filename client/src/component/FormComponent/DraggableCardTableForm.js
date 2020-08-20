import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { UITextArea } from "../UIComponents/UITextArea";
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'
import { ReactComponent as DraggableIcon } from '../../icons/draggable.svg'
import { UILink } from '../UIComponents/UILink';
import styled from 'styled-components';
import { AddCardButton } from './AddCardButton';

const Card = styled.div`
    width: calc(100% - 40px);

    background: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    margin-top: 5px;
    margin-bottom: 10px;

    padding: 20px;
`

const Term = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;

    color: #222;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Definition = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;

    color: #222;
`

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Number = styled.div`
    font-family: Inter;
    font-style: 500;
    font-weight: normal;
    font-size: 1.1rem;

    color: #5E5E5E;
`

const Trash = styled(TrashIcon)`
    stroke: #5E5E5E;
    width: 24px;
    height: 24px;

    &:hover {
        stroke: #40a9ff;
    }
`

const DraggableI = styled(DraggableIcon)`
    stroke: #5E5E5E;
    width: 24px;
    height: 24px;

    margin-left: 20px;

    &:hover {
        stroke: #40a9ff;
    }
`

const Icons = styled.div`
    display: flex;
    flex-direction: row;
`


const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    boxShadow: isDragging ? "0px 0px 30px 6px rgba(0, 0, 0, 0.05)" : "box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05)",
    transition: "300ms",

    // styles we need to apply on draggables
    ...draggableStyle
});

export const DraggableCardTableForm = ({ items, arrayHelpers }) => {
    function onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        // items = reorder(items, result.source.index, result.destination.index)
        arrayHelpers.move(result.source.index, result.destination.index)
    }

    useEffect(() => {

    }, [items])

    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
            {(provided, snapshot) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                >
                {items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                        <Card 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )}
                        >
                            <CardHeader>
                                <Number>{index + 1}</Number>
                                <Icons>   
                                    <UILink svgLeft={<Trash/>} onClick={()=>arrayHelpers.remove(index)}/>
                                    <div {...provided.dragHandleProps}><UILink svgLeft={<DraggableI/>}/></div>
                                </Icons>
                            </CardHeader>
                            <Term>
                                <UITextArea
                                    label="Term"
                                    name={`cards.${index}.front`}
                                    rows={1}
                                />
                            </Term>
                            <Definition>
                                <UITextArea
                                    label="Definition"
                                    name={`cards.${index}.back`}
                                    rows={1}
                                />
                            </Definition>
                        </Card>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
            <AddCardButton onClick={() => arrayHelpers.push({ front: "", back: "", id: `${items.length}-${new Date().getTime()}`})}/>
        </DragDropContext>
    );
};
