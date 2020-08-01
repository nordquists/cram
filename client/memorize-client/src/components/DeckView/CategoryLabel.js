import React, { useState } from 'react'

export const CategoryLabel = ( {emoji, label} ) => {

    return (
        <button className={'category-label'}>
            <span className="emoji">{emoji}</span>
            <span className="label">{label}</span>
        </button>
    )
}
