import React, { useEffect, useState } from 'react';
import Header from './mainComponents/header.js';
import Menu from './mainComponents/Menu/menu.js';
import ArticlesArea from './mainComponents/Article/ArticlesArea';
import Footer from './mainComponents/Footer.js';
import './App.css';

function App() {
  const [selectedArticleIds, setSelectedArticleIds] = useState([]);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleSelectArticle = (id, isCtrlPressed) => {
    console.log(`Selected article ID: ${id}`);
    if (isCtrlPressed) {
      setSelectedArticleIds(prevIds => [...prevIds, id]);
      addNotification("Страница конкотенирована");
    } else {
      setSelectedArticleIds([id]);
    }
  };

  const addNotification = (message) => {
    const id = new Date().getTime();
    setNotifications(prevNotifications => [...prevNotifications, { id, message }]);
    setTimeout(() => {
      document.getElementById(`notification-${id}`).classList.add('notification-disappearing');
      setTimeout(() => removeNotification(id), 3000); 
    }, 3000); 
  };

  const removeNotification = (id) => {
    setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== id));
  };

  useEffect(() => {
    if (selectedArticleIds.length === 0) {
      const defaultArticleId = 1;
      setSelectedArticleIds([defaultArticleId]);
    }
  }, [selectedArticleIds]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Control' || e.key === 'Meta') {
        setIsCtrlPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Control' || e.key === 'Meta') {
        setIsCtrlPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className={`App ${isCtrlPressed ? 'ctrl-pressed' : ''}`}>
      <Header />
      <div className="notifications">
        {notifications.map(notification => (
          <div
            id={`notification-${notification.id}`}
            key={notification.id}
            className="notification"
          >
            {notification.message}
          </div>
        ))}
      </div>
      <div className="page_with_footer">
        <Menu handleSelectArticle={handleSelectArticle} />
        <ArticlesArea selectedArticleIds={selectedArticleIds} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
