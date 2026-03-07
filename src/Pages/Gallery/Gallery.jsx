import React, { useState } from 'react';  // ← add useState
import PrimaryHeader from '../../Components/Ui/PrimaryHeader';
import GalleryPage from './GalleryPage';

const Gallery = () => {
  const [galleryTitle, setGalleryTitle] = useState(null);

  return (
    <div>
      <PrimaryHeader HeadLine={<>{galleryTitle || "Gallery"}</>} />
      <GalleryPage onSelectItem={(name) => setGalleryTitle(name)} />
    </div>
  );
}

export default Gallery;