import React from 'react';
import { CategoryLabeler } from './CategoryLabeler';
import { StatsLine } from '../Stats/StatsLine';

const DeckViewHeader = ({ categories, title, description, author, percentages }) => {
    return (
        <div className="deck-view-header">
            
            <div className="topics">
                <CategoryLabeler
                    categories={categories}
                />
            </div>
            <h1>
                {title}
            </h1>
            <h3>
                {description}
            </h3>

            {/* <div className="by-line">
                <p className="created-by">CREATED BY  </p>
                <p className="author">{author}</p>
            </div> */}

        </div>

       
    );
}


export default DeckViewHeader;