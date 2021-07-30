import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery {
    return (
        {
            image && image.map(({ id,  webformatURL, tags})) => (
                <ul className="ImageGallery">
                    <ImageGalleryItem 
                    url={webformatURL}
                    alt={tags}
                    // openModal={}
                 />
                </ul>
            )
        }
        
    )
    
}
