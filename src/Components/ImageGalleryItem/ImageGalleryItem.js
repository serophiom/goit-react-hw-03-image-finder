import './ImageGalleryItem.css';

function ImageGalleryItem () {
    return (
        <li className="ImageGalleryItem">
        <img src="{url}" alt="{name}" className="ImageGalleryItem-image" onClick={openModal}/>
        </li>
    );
}

