import React from "react";

const ButtonRow = (props) => {
    return (
        <div className="button-row">
            <button className={'button'} id={'red-button'}></button>
            <button className={'button'} id={'orange-button'}></button>
            <button className={'button'} id={'green-button'}></button>
        </div>
    );
}

export default ButtonRow;