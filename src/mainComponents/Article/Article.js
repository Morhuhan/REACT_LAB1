import React, { useEffect, useState } from 'react';
import ArticleBlock from './ArticleBlock';

function Article({ selectedArticleId }) {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedArticleId) {
      console.log(`Fetching article with ID: ${selectedArticleId}`);
      fetch(`http://localhost:8080/api/articles/${selectedArticleId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          console.log('Fetched article:', data);
          setArticle(data);
          setError(null); 
        })
        .catch(error => {
          console.error('Error fetching article:', error);
          setError(error);
          setArticle(null); 
        });
    }
  }, [selectedArticleId]);

  if (error) {
    return (
      <div className="error">
        <img src="https://imageup.ru/img110/4838092/smoothjauntybighornedsheep-max-1mb.gif" alt="Ошибка загрузки" />
      </div>
    );
  }

  if (!article) {
    return <p>Выберите статью из меню.</p>;
  }

  return (
    <div className="article">
      <h1>{article.title}</h1>
      {article.blocks.map(block => (
        <ArticleBlock key={block.id} block={block} />
      ))}
    </div>
  );
}

export default Article;
