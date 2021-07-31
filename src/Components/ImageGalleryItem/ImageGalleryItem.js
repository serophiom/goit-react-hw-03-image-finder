import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

function ImageGalleryItem ({ id, url, name, openModal }) {
    return (
        <li className="ImageGalleryItem" key={id}>
            <img src={url} alt={name} data-id={id} className="ImageGalleryItem-image" onClick={openModal}/>
        </li>
    );
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;