import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import MessageList from './components/MessageList';
import MessageDetail from './components/MessageDetail';
import './styles/global.css';

const App: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null); // Track the selected message
interface Message {
  id: number;
  subject: string;
  status: 'read' | 'unread'; // Ensure status is strictly 'read' or 'unread'
  starred: boolean;
}
  const messages: Message[] = [
  { id: 1, subject: 'Project deadline reminder', status: 'unread', starred: false },
  { id: 2, subject: 'Security update required', status: 'read', starred: true },
  { id: 3, subject: 'Weekend hiking trip', status: 'unread', starred: false },
];

  const handleMessageClick = (id: number) => {
    setSelectedMessage(id); // Set the selected message ID
  };

  const selectedMessageData = messages.find((msg) => msg.id === selectedMessage);

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <MessageList messages={messages} filter='unread' onMessageClick={handleMessageClick} />
        {selectedMessageData && <MessageDetail message={selectedMessageData} />}
      </div>
    </div>
  );
};

export default App;
