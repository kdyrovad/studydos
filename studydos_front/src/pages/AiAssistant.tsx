import React, { useState, useRef, useEffect } from 'react';
import MicIcon from '../assets/icons/mic-icon.svg'; // Or your preferred method of importing SVGs
import ImageIcon from '../assets/icons/photo-icon.svg'; // Or your preferred method of importing SVGs
import SendIcon from '../assets/icons/send-icon.svg';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  const [inputMessage, setInputMessage] = useState('');
  const chatContainerRef = useRef(null);


  useEffect(() => {
    // Scroll to bottom on message change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        sender: 'you',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: inputMessage,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Make API call to backend
      fetch('http://localhost:5001/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author: 'user', message: inputMessage }),
      })
        .then((res) => res.json())
        .then((data) => {
          const aiResponse = {
            sender: 'StudyDos.AI',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            content: data.answer, // Access the "answer" field from the response
          };
          setMessages((prevMessages) => [...prevMessages, aiResponse]); // Use a functional update for state
        })
        .catch((err) => console.error('Error fetching response:', err));
    }
  };

  const messageBubbleStyle = {
    maxWidth: '80%',
    padding: '12px',
    borderRadius: '20px',
    marginBottom: '8px',
    wordWrap: 'break-word', // Handle long words
  };

  const youMessageStyle = {
    ...messageBubbleStyle,
    backgroundColor: '#DCF8C6', // Example: Light green
    alignSelf: 'flex-end',
  };

  const aiMessageStyle = {
    ...messageBubbleStyle,
    backgroundColor: '#E5E5EA', // Example: Light gray
    alignSelf: 'flex-start',
  };
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px',
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
    };

  const chatContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    height: '500px', // Adjust as needed
    overflowY: 'scroll',
    marginTop: '20px',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px', // Added horizontal padding
    borderRadius: '30px', // Rounded corners
    backgroundColor: '#F5F5F5', // Light grey background
    border: '1px solid #E0E0E0', // Subtle border
    margin: '8px', // Add margin for spacing from the chat area
  };

  const inputStyle = {
    flex: '1',
    padding: '8px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    color: '#333', // Darker text
  };

  const sendButtonStyle = {
    backgroundColor: 'transparent', // Transparent background
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
  };

  const iconStyle = {
    width: '24px', // Adjust as needed
    height: '24px', // Adjust as needed
    marginRight: '8px', // Spacing between icon and text/input
    cursor: 'pointer', // Indicate clickable
    color: '#777', // Grey color
  };

  const messageTimestampStyle = {
    fontSize: '0.7em',
    color: '#777',
    marginLeft: '8px',
  };

  return (
    <div style={containerStyle}>

      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151'}}>Ask StudyDos!</h2>
      <p style={{ margin: 0, color: '#555'}}>CS546 A2 – Introduction to Probability and Statistics</p>
      <p style={{ margin: 0, fontWeight: 'bold', color: '#555'}}>Assignment #1 – Descriptive Statistics</p>

      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={chatContainerStyle} ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: message.sender === 'you' ? 'flex-end' : 'flex-start',
                marginBottom: '4px',
              }}
            >
              <div
                style={message.sender === 'you' ? youMessageStyle : aiMessageStyle}
              >
                {message.content}
              </div>
              <span style={messageTimestampStyle}>{message.timestamp}</span>
            </div>
          ))}
        </div>
        <div style={inputContainerStyle}>
          <img src={MicIcon} alt="Microphone" style={iconStyle} />
          <img src={ImageIcon} alt="Image" style={iconStyle} />
          <input
            type="text"
            style={inputStyle}
            placeholder="Type message"
            value={inputMessage}
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button style={sendButtonStyle} onClick={handleSendMessage}>
            <img src={SendIcon} alt="Send" style={iconStyle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;