import React, { useState, useEffect }  from 'react'
import { CategoryLabel } from './CategoryLabel';

// Assumes no duplicate categories 

export const CategoryLabeler = ({ categories }) => {
    const categoryLabels = [];

    categories.forEach(category => {
        categoryLabels.push(
            <CategoryLabel key={category.id} emoji={category.emoji} label={category.label}/>
        );
    });

    return (
        <div className="category-labels">
            {categoryLabels}
        </div>
    )
}
