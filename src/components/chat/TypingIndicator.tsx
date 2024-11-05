import React from 'react';
import { useStore } from '../../store';

export const TypingIndicator = () => {
  const { typingUsers, users, username } = useStore();

  return (
    <div className="px-4 h-6 text-gray-400 text-sm">
      {Object.entries(typingUsers)
        .filter(([id, isTyping]) => isTyping)
        .map(([id]) => users.find(u => u.id === id)?.username)
        .filter(name => name !== username)
        .map(name => `${name} is typing...`)
        .join(', ')}
    </div>
  );
};