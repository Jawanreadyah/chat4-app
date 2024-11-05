import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store';

interface MessageProps {
  message: {
    id: number;
    user: {
      username: string;
    };
    text: string;
    timestamp: string;
  };
}

export const Message = ({ message }: MessageProps) => {
  const username = useStore((state) => state.username);
  const isOwnMessage = message.user.username === username;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isOwnMessage
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-100'
        }`}
      >
        <div className="text-sm opacity-75 mb-1">
          {message.user.username}
        </div>
        <div>{message.text}</div>
        <div className="text-xs opacity-50 mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </motion.div>
  );
};