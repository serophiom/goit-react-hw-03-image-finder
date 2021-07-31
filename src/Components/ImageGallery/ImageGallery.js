import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import './ImageGallery.css';

function ImageGallery ({ images, clickOnImage }) {
    return (
        <ul className="ImageGallery">
            {images && images.map(({ id, webformatURL, tags }) => (
                <ImageGalleryItem 
                id={id}
                url={webformatURL}
                name={tags}
                openModal={clickOnImage}
                />   
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    clickOnImage: PropTypes.func.isRequired,
}

export default ImageGallery;
