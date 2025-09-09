import React from 'react';
import MessageItem from './MessageItem';

interface Message {
  id: number;
  subject: string;
  status: 'read' | 'unread';
  starred: boolean;
}

interface MessageListProps {
  messages: Message[];
  filter: 'read' | 'unread';
  onMessageClick: (id: number) => void;  // Callback to handle message click
}

const MessageList: React.FC<MessageListProps> = ({ messages, filter, onMessageClick }) => {
  const filteredMessages = messages.filter(msg => msg.status === filter);

  return (
    <div className="message-list">
      {filteredMessages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          onClick={() => onMessageClick(message.id)} // Pass the onClick event to MessageItem
        />
      ))}
    </div>
  );
};

export default MessageList;
