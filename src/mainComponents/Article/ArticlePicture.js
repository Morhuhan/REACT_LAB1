// src/ArticlePicture.js
import React from 'react';

function ArticlePicture({ picture, caption }) {
  return (
    <div className="article-picture">
      <img src={`http://localhost:8080/images/${picture}`} alt={caption} />
      <p className="caption">{caption}</p>
    </div>
  );
}

export default ArticlePicture;
