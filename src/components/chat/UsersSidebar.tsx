import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store';

interface UsersSidebarProps {
  show: boolean;
}

export const UsersSidebar = ({ show }: UsersSidebarProps) => {
  const users = useStore((state) => state.users);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="w-64 bg-gray-800 border-l border-gray-700"
        >
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white">Online Users</h2>
          </div>
          <div className="p-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-2 text-gray-300 mb-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>{user.username}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};