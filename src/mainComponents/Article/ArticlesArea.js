import React from 'react';
import Article from './Article';

function ArticlesArea({ selectedArticleIds }) {
  return (
    <div className="article-area">
      {selectedArticleIds.map((articleId, index) => (
        <Article key={`${articleId}-${index}`} selectedArticleId={articleId} />
      ))}
    </div>
  );
}

export default ArticlesArea;
