import React, { useState } from 'react';
import MicIcon from '../assets/icons/mic-icon.svg'; // Or your preferred method of importing SVGs
import ImageIcon from '../assets/icons/photo-icon.svg'; // Or your preferred method of importing SVGs
import SendIcon from '../assets/icons/send-icon.svg';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'you',
      timestamp: '02:22 AM',
      content: 'do androids truly dream of electric sheeps or not?',
    },
    {
      sender: 'StudyDos.AI',
      timestamp: '02:22 AM',
      content: (
        <>
          The question of whether androids dream of electric sheep is the title and central theme of
          the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.
          <ol>
            <li>
              The book explores a world where androids are indistinguishable from humans except
              for a lack of empathy. The story follows Rick Deckard, a bounty hunter who tracks down
              rogue androids.
            </li>
            <li>
              The title refers to the empathy test used to distinguish between humans and androids.
              The test involves administering a fictional scenario and evaluating the subject's
              emotional response. Electric sheep are rare, real animals that people own as status
              symbols. Owning one is seen as a sign of empathy and a connection to the natural
              world.
            </li>
            <li>
              The book never definitively answers the question of whether androids dream or not. It
              explores the nature of reality, consciousness, and what it means to be human.
            </li>
            <li>
              The book inspired the movie Blade Runner, though there are some key differences in
              plot.
            </li>
          </ol>
        </>
      ),
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Simulate adding the user's message
      const newMessage = {
        sender: 'you',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: inputMessage,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      //Simulate the studyDos message.  Remove this when backend is ready
      setTimeout(() => {
        const aiResponse = {
          sender: 'StudyDos.AI',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          content: "I am StudyDos!  I don't have any information about that yet.",
        };
        setMessages([...messages, newMessage, aiResponse]);
      }, 1000);

      //  In the future, this is where you'll make the API call to your backend
      //  to get the response from StudyDos.AI
      //  Example:
      //  fetch('/api/chat', {
      //    method: 'POST',
      //    headers: { 'Content-Type': 'application/json' },
      //    body: JSON.stringify({ message: inputMessage })
      //  })
      //  .then(res => res.json())
      //  .then(data => {
      //    const aiResponse = {
      //      sender: 'StudyDos.AI',
      //      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      //      content: data.response // Assuming the backend returns a 'response' field
      //    };
      //    setMessages([...messages, newMessage, aiResponse]);
      //  })
      //  .catch(err => console.error("Error fetching response:", err));
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
        <div style={chatContainerStyle}>
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