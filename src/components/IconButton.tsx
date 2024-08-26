// import React from 'react';
// import "../styles/iconButton.css"

// interface SquareButtonProps {
//   icon: React.ReactNode;
//   text: string;
//   onClick: () => void;
//   isActive: boolean; // Nueva prop para indicar si el botón está activo
// }

// const SquareButton: React.FC<SquareButtonProps> = ({ icon, text, onClick, isActive }) => {
//   return (
//     <div 
//       className={`square-button ${isActive ? 'active' : ''}`} // Aplica la clase 'active' si el botón está activo
//       onClick={onClick}
//     >
//       <div className={`icon-container ${isActive ? 'active' : ''}`}>{icon}</div>
//       <div className={`text-container ${isActive ? 'active' : ''}`}>{text}</div>
//     </div>
//   );
// };

// export default SquareButton;

// import React from 'react';
// import "../styles/iconButton.css";

// interface SquareButtonProps {
//   icon: React.ReactNode;
//   text: string;
//   onClick: () => void;
//   isActive: boolean;
// }

// const IconButton: React.FC<SquareButtonProps> = ({ icon, text, onClick, isActive }) => {
//   return (
//     <div 
//       className={`square-button ${isActive ? 'active' : ''}`} 
//       onClick={onClick}
//     >
//       <div className={`icon-container ${isActive ? 'active' : ''}`}>{icon}</div>
//       <div className={`text-container ${isActive ? 'active' : ''}`}>{text}</div>
//     </div>
//   );
// };

// export default IconButton;

import React from 'react';
import "../styles/iconButton.css";

interface IconButtonProps {
  activeIcon: React.ReactNode;  // Ícono para cuando el botón está activo
  inactiveIcon: React.ReactNode;  // Ícono para cuando el botón está inactivo
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