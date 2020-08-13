import React from 'react'
import {ReactComponent as ChevronIcon} from '../icons/left-chevron.svg'

// should be able to have two buttons, a back button, and a button of choice
// title and subtitle

export const Header = ({ title, subtitle, onBack, otherButtonText, isSubmitting, onSubmit }) => {



    return (
        <div className="header">
            <div>
                {
                    onBack && 
                    <button className="header-back-button" type="button" onClick={onBack}>
                        <ChevronIcon/>
                        <span className="header-back-button-label">Back</span>
                    </button>
                }
            </div>
            {
                (title || subtitle || otherButtonText) && 
                <div className={'header-flex header-sticky'}>
                    <div className="title-div">
                        <h1>{title && title}</h1>
                        <h3>{subtitle && subtitle}</h3>
                    </div>
                    <div>
                        {
                            otherButtonText && 
                            <button onClick={onSubmit} disabled={isSubmitting} type="submit" className="button-header">
                                {otherButtonText}
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;