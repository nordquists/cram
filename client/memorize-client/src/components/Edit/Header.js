import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const Header = ({ backLink, onDone }) => {
    return(
        <div>
            {backLink &&
            <Link to={`${backLink}`}>
                <button>Back</button>
            </Link>
            }
        </div>
    );
}

export default Header;