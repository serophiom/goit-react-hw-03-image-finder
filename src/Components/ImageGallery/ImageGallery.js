import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

function ImageGallery ({ images, clickOnImage }) {
    return (
        <ul className="ImageGallery">
            {images && images.map(({ id,  webformatURL, tags}) => (
                <ImageGalleryItem 
                id={id}
                url={webformatURL}
                alt={tags}
                openModal={clickOnImage}
                />  
            ))}
        </ul>
    );
}

export default ImageGallery;
