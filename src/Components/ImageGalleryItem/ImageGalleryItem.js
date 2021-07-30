import React from 'react';
import './ImageGalleryItem.css';

function ImageGalleryItem ({ id, url, name, openModal }) {
    return (
        <li className="ImageGalleryItem" key={id}>
            <img src={url} alt={name} data-id={id} className="ImageGalleryItem-image" onClick={openModal}/>
        </li>
    );
}

export default ImageGalleryItem;

