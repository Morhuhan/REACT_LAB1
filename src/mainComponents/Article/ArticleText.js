import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function ArticleText({ text }) {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>;
}

export default ArticleText;
