import React from 'react'
import {ReactComponent as ChevronIcon} from '../icons/left-chevron.svg'

// should be able to have two buttons, a back button, and a button of choice
// title and subtitle

export const Header = ({ title, subtitle, onBack, otherButtonText, otherButtonFormId }) => {



    return (
        <div className="header">
            <div>
                {
                    onBack && 
                    <button className="header-back-button">
                        <ChevronIcon/>
                        <span className="header-back-button-label">Back</span>
                    </button>
                }
            </div>
            <div className="header-flex">
                <div className="title-div">
                    <h1>{title && title}</h1>
                    <h3>{subtitle && subtitle}</h3>
                </div>
                <div>
                    {
                        otherButtonText && 
                        <button form={otherButtonFormId} type="submit" className="button-header">
                            {otherButtonText}
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;