import React from 'react';

const DeckViewHeader = ({ topic, title, description, author }) => {
    return (
        <div className="deck-view-header">
            <div className="icon">

            </div>
            <div>
                <div className="topic">
                    {topic}
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
            <div className="created-by">
                Created by {author}
            </div>
        </div>
    );
}


export default DeckViewHeader;