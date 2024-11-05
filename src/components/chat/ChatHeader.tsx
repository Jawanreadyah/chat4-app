import React from 'react';
import { Users, LogOut } from 'lucide-react';
import { useStore } from '../../store';

interface ChatHeaderProps {
  showUsers: boolean;
  setShowUsers: (show: boolean) => void;
}

export const ChatHeader = ({ showUsers, setShowUsers }: ChatHeaderProps) => {
  const logout = useStore((state) => state.logout);

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-white">Modern Chat</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowUsers(!showUsers)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <Users className="w-6 h-6" />
        </button>
        <button
          onClick={logout}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};