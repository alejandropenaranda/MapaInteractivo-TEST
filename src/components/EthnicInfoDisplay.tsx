import React, { useState } from 'react';
import '../styles/EthnicInfoDisplay.css';

interface EthnicInfoDisplayProps {
  content: string;
  link?: string;
  setViewerUrl: (url: string | undefined) => void;
  setReferenceStatus: (visible: boolean | undefined) => void;
}

const EthnicInfoDisplay: React.FC<EthnicInfoDisplayProps> = ({ content, link, setViewerUrl, setReferenceStatus }) => {
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (link) {
      setViewerUrl(link);
      setReferenceStatus(true);
      console.log("Estoy cambiando el estado a true");
      console.log(link);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopyMessageVisible(true);
      setTimeout(() => {
        setCopyMessageVisible(false);
      }, 3000); // Oculta el mensaje después de 2 segundos
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  };

  return (
    <div className="ethnic-info-display">
      {content && <p>{content}</p>}
      <div className="button-container-EID">
        <div className="copy-message-container">
          {copyMessageVisible && <span className="copy-message">!Se ha copiado correctamente!</span>}
          <button onClick={handleCopyClick}>
            Copiar
          </button>
        </div>
        {link && (
          <button onClick={handleLinkClick}>
            Ver referencia
          </button>
        )}
      </div>
    </div>
  );
};

export default EthnicInfoDisplay;