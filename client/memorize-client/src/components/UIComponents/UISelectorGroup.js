import React from 'react'
import { UITextField } from './UITextField'

export const UISelectorGroup = ({ name, value, setFieldValue }) => {    
    function handleSelect(select) {
        setFieldValue(value.filter((item) => item !== select));
    }

    return (
        <div>
            <UITextField
                label="Add Category"
                name="category-search"
                type="text"
                placeholder="Find a category..."
            />
        </div>
    )
}
