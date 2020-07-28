import React, { useState } from 'react'

export const CategoryButton = ( {emoji, label, handleSelect} ) => {
    const [selected, setSelected] = useState(false);

    const plus_svg = (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" viewBox="0 0 24 24"  fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>)
    const check_svg = (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" viewBox="0 0 24 24"  fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M5 12l5 5l10 -10" /></svg>)

    return (
        <button className={`category-button ${selected ? 'selected': ''}`} onClick={() => {setSelected(!selected); handleSelect(!selected, label)}}>
            <span className="emoji">{emoji}</span>
            <span className="label">{label}</span>
            {!selected && plus_svg}{selected && check_svg}
        </button>
    )
}
