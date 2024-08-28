import React from 'react';
import "../styles/iconButton.css";

interface IconButtonProps {
  activeIcon: React.ReactNode;  
  inactiveIcon: React.ReactNode;
  text: string;
  onClick: () => void;
  isActive: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ activeIcon, inactiveIcon, text, onClick, isActive }) => {
  return (
    <div 
      className={`square-button ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      <div className="icon-container">{isActive ? activeIcon : inactiveIcon}</div>
      <div className={`text-container ${isActive ? 'active' : ''}`}>{text}</div>
    </div>
  );
};

export default IconButton;