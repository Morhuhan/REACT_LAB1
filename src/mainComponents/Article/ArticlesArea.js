// ArticlesArea.js
import React from 'react';
import Article from './Article';

function ArticlesArea({ selectedArticleIds }) {
  return (
    <div className="article-area">
      {selectedArticleIds.map(articleId => (
        <Article key={articleId} selectedArticleId={articleId} />
      ))}
    </div>
  );
}

export default ArticlesArea;
