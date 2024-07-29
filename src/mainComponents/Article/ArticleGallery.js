import React from 'react';
import ArticlePicture from './ArticlePicture';

function ArticleGallery({ pictures }) {
  return (
    <div className="article-gallery">
      {pictures.map((picture) => (
        <ArticlePicture 
          key={picture.id} 
          picture={picture.src} 
          caption={picture.caption} 
        />
      ))}
    </div>
  );
}

export default ArticleGallery;