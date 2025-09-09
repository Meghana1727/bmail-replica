import React from 'react';

interface Message {
  id: number;
  subject: string;
  status: 'read' | 'unread';
  starred: boolean;
}

interface MessageItemProps {
  message: Message;
  onClick: () => void;  // Handle click event
}

const MessageItem: React.FC<MessageItemProps> = ({ message, onClick }) => {
  return (
    <div className={`message-item ${message.starred ? 'starred' : ''}`} onClick={onClick}>
      <span>{message.subject}</span>
      <button onClick={() => alert('Starred message ' + message.id)}>⭐</button>
    </div>
  );
};

export default MessageItem;
