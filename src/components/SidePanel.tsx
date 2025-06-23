import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaTimes, FaSearch } from 'react-icons/fa';
import type { RootState } from '../store/store';
import useChatUsers from '../hooks/useChatUsers';


type FilterType = 'all' | 'male' | 'female';

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const { users, isLoading, error } = useChatUsers(selectedFilter, accessToken);

  return (
    <>
      <div
        className={`
        fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:fixed md:translate-x-0 md:w-80 md:shadow-lg md:border-r md:border-gray-200 md:h-screen
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 flex-shrink-0">
            {/* Mobile Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 md:hidden">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search or start a new chat"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Panel Content */}
          <div className="p-4">
            {/* Filter Buttons */}
            <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
              <button
                className={`px-4 py-1.5 text-sm font-semibold rounded-full flex-shrink-0 ${selectedFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setSelectedFilter('all')}
              >
                All
              </button>
              <button
                className={`px-4 py-1.5 text-sm font-semibold rounded-full flex-shrink-0 ${selectedFilter === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setSelectedFilter('male')}
              >
                Male
              </button>
              <button
                className={`px-4 py-1.5 text-sm font-semibold rounded-full flex-shrink-0 ${selectedFilter === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setSelectedFilter('female')}
              >
                Female
              </button>
              <button className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-300 flex-shrink-0">Inbox</button>
            </div>

            {/* User List */}
            <div className="space-y-1">
              {isLoading && <p className="text-center text-gray-500">Loading users...</p>}
              {error && <p className="text-center text-red-500">{error}</p>}
              {!isLoading && !error && users.length === 0 && (
                <p className="text-center text-gray-500">No users found.</p>
              )}
              {!isLoading &&
                !error &&
                users.map((user) => (
                  <div key={user.id} className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <img
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      src={`https://i.pravatar.cc/150?u=${user.username}`}
                      alt={user.full_name}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{user.full_name}</h3>
                      <p className="text-sm text-gray-600">@{user.username}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default SidePanel; 