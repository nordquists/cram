import React, { useState } from 'react'

export const ModalContainer = ({ render, closable, showing, setShowing }) => {
    return (
        <div>
            {
                showing &&
                <div className="modal">
                    { closable && 
                        <div>
                            <button onClick={() => setShowing(false)}>x</button>
                        </div>
                    }
                    
                    { render({ setShowing }) }
                </div>
            }
        </div>
    )
}
