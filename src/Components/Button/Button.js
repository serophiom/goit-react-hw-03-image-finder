import React from 'react';
import './Button.css';

function Button ({ clickOnButton }) {
    return (
        <button className="Button" type="button" onClick={clickOnButton}>
            Load more
        </button>
    );
}

export default Button;