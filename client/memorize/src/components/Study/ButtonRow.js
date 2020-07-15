import React from "react";

const ButtonRow = (props) => {
    return (
        <div className="button-row">
            <button className={'button'} id={'red-button'} onClick={props.advanceIndex('r')}/>
            <button className={'button'} id={'orange-button'} onClick={props.advanceIndex('o')}/>
            <button className={'button'} id={'green-button'} onClick={props.advanceIndex('g')}/>
        </div>
    );
}

export default ButtonRow;