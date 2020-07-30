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
                    <section className="modal-content">
                        { render({ setShowing }) }
                    </section>
                </div>
            }
        </div>
    )
}
