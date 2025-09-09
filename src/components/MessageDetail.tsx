import React from 'react';

// Define Message type
interface Message {
  id: number;
  subject: string;
  status: 'read' | 'unread';
  starred: boolean;
}

interface MessageDetailProps {
  message: Message;  // Expecting the entire message object here
}

const MessageDetail: React.FC<MessageDetailProps> = ({ message }) => {
  return (
    <div className="message-detail">
      <h2>{message.subject}</h2>
      <p>Status: {message.status}</p>
      <p>Starred: {message.starred ? 'Yes' : 'No'}</p>
      <p>This is where the full message content would be displayed.</p>
    </div>
  );
};

export default MessageDetail;
