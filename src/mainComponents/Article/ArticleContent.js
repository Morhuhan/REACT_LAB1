import React from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleText from './ArticleText';

function ArticleContent({ content, header }) {
  return (
    <div className="article-content">
      <ArticleHeader header={header} />
      <ArticleText text={content} />
    </div>
  );
}

export default ArticleContent;
