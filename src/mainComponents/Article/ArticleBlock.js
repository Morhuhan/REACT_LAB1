import React from 'react';
import ArticleContent from './ArticleContent';
import ArticleGallery from './ArticleGallery';

function ArticleBlock({ block }) {
  return (
    <div className="article-block">
      <ArticleContent content={block.content} header={block.title} />
      {block.pictures && block.pictures.length > 0 && (
        <ArticleGallery pictures={block.pictures} />
      )}
    </div>
  );
}

export default ArticleBlock;
