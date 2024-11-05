import React, { useState } from 'react';
import { ChatHeader } from './chat/ChatHeader';
import { MessageList } from './chat/MessageList';
import { TypingIndicator } from './chat/TypingIndicator';
import { MessageInput } from './chat/MessageInput';
import { UsersSidebar } from './chat/UsersSidebar';

export const ChatScreen = () => {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div className="h-screen flex">
      <div className="flex-1 flex flex-col">
        <ChatHeader showUsers={showUsers} setShowUsers={setShowUsers} />
        <MessageList />
        <TypingIndicator />
        <MessageInput />
      </div>
      <UsersSidebar show={showUsers} />
    </div>
  );
};