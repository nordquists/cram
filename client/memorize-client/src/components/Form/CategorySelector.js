import React, { useState, useEffect }  from 'react'
import { CategoryButton } from './CategoryButton';
import Dropdown from './Dropdown';

// Assumes no duplicate categories 

export const CategorySelector = ({ categories }) => {
    const [visibleButtons, setVisibleButtons] = useState([])
    const [dropdownButtons, setDropdownButtons] = useState([])
    const [selected, setSelected] = useState([])
    
    function handleSelect(add, select) {
        if(add) setSelected([...selected, select]);
        else setSelected(selected.filter((item) => item !== select));
    }

    const categoryButtons = [];

    categories.forEach(category => {
        categoryButtons.push(
            <CategoryButton emoji={category.emoji} label={category.label} handleSelect={handleSelect}/>
        );
    });

    return (
        <div>
            {categoryButtons}

            {/* {dropdownButtons && <Dropdown render={categoryButtons}/>} */}
        </div>
    )
}
