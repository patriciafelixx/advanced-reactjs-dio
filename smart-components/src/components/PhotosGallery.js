import React, { memo, useState } from 'react';
import Button from './Button';

const PhotosGallery = (props) => {
    const { photos } = props;
    const [gallery, setGallery] = useState(photos);

    const handleRemove = (key) => {
        const newGallery = gallery.filter((img, i) => i !== key)
        setGallery(newGallery);
    }

    const renderPhotos = (img, key) => {
        return (
            <div>
                <img src={img} />
                <Button onClick={() => handleRemove(key)}>Remover {key}</Button>
            </div>
        )
    }

    return (
        <div>
            {gallery.map(renderPhotos)}
        </div>
    )
}

export default memo(PhotosGallery);
