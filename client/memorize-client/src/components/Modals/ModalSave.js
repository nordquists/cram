import React from 'react'

export const ModalSave = ({ title, message, cancelLabel, onCancel, continueLabel, onContinue }) => {
    return (
        <section className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">
                    {title}
                </h3>
            </div>
            <div className="modal-body">
                <p>
                    {message}
                </p>
            </div>
            <div className="modal-footer">
                {cancelLabel &&
                    <button onClick={onCancel}>{cancelLabel}</button>
                }
                {continueLabel &&
                    <button onClick={onContinue}>{continueLabel}</button>
                }
            </div>
        </section>
    )
}
