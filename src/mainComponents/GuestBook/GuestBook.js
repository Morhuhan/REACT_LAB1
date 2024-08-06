import React, { useEffect, useState } from 'react';

function GuestBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ name: '', text: '' });
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/messages')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setMessages(data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
        setError(error);
        setMessages([]);
      });
  }, []);

  const handleSubmit = () => {

    fetch('http://localhost:8080/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setMessages([...messages, data]);
        setNewMessage({ name: '', text: '' });
        setIsOpen(false);
        setValidationError('');
      })
      .catch(error => {
        console.error('Error submitting message:', error);
        setError(error);
      });
  };

  const handleInputChange = (field, value) => {
      setNewMessage({ ...newMessage, [field]: value });
      setValidationError('');
  };

  return (
    <div className="guest-book-container">
      <img
        src="книга.png"
        alt="Книга"
        className="guest-book-icon"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="guest-book">
          <div className="guest-book-header">
            <h2>Гостевая книга</h2>
            <button className="guest-book-close" onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="guest-book-messages">
            {error && <p>Ошибка загрузки сообщений.</p>}
            {messages.map((msg, index) => (
              <div key={index} className="guest-book-message-block">
                <div className="guest-book-message-name">{msg.name}</div>
                <div className="guest-book-message-text">{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="guest-book-user-container">
            {validationError && <p className="error">{validationError}</p>}
            <input
              type="text"
              className='userName'
              placeholder="Ваше имя"
              value={newMessage.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <textarea
              className='userText'
              placeholder="Ваше сообщение"
              value={newMessage.text}
              onChange={(e) => handleInputChange('text', e.target.value)}
            />
            <button onClick={handleSubmit}>Отправить</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuestBook;
