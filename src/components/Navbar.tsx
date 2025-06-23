import React, { useState } from "react";
import { FaBars, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import SidePanel from "./SidePanel";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200 z-10">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Title on Desktop, Menu on Mobile */}
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-700 hover:text-blue-500 transition-colors md:hidden"
                aria-label="Open menu"
              >
                <FaBars className="text-xl" />
              </button>
              <h1 className="hidden md:block text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dashboard
              </h1>
            </div>

            {/* Right side - User Menu */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="hidden sm:flex items-center space-x-2">
                <FaUserCircle className="text-2xl text-blue-500" />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">
                    {user?.full_name || user?.username || "User"}
                  </p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                  title="Settings"
                >
                  <FaCog className="text-lg" />
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <FaSignOutAlt className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SidePanel isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Navbar; 