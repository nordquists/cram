import React from 'react'
import { FieldArray } from 'formik';
import styled from 'styled-components';
import { ReactComponent as TrashIcon } from '../../icons/trash.svg'
import { UITextArea } from '../UIComponents/UITextArea';
import { UIInvisibleInput } from '../UIComponents/UIInvisibleInput';
import { UILink } from '../UIComponents/UILink';
import { AddCardButton } from './AddCardButton';

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
    margin-bottom: 5px;
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
`

export const CardTableForm = ({ values }) => {

    return (
        <Table>
            <FieldArray
                name="cards"
                render={array => (
                    <div>
                        {values.cards && values.cards.length > 0 ? (
                            values.cards.map((card, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <Number>{index + 1}</Number>
                                        <UILink svgLeft={<Trash/>} onClick={()=>array.remove(index)}/>
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
                                    <UIInvisibleInput
                                        name={`cards.${index}.index`}
                                        value={index}
                                    />
                                </Card>
                            ))
                        ) : null}
                        
                        <AddCardButton onClick={() => array.push({ front: "", back: ""})}/>
                    </div>
                )}
            />
        </Table>
    )
}
