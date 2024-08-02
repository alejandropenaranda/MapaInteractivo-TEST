import React from 'react';
import '../styles/EthnicInfoDisplay.css';

interface EthnicInfoDisplayProps {
  content: string;
  link?: string;
  setViewerUrl: (url: string | undefined) => void;
  setReferenceStatus: (visible: boolean | undefined) => void;
}

const EthnicInfoDisplay: React.FC<EthnicInfoDisplayProps> = ({ content, link, setViewerUrl, setReferenceStatus }) => {


  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (link) {

      setViewerUrl(link);
      setReferenceStatus(true);
      console.log("Estoy cambiando el estado a true")
      console.log(link)
    }
  };

  return (
    <div className="ethnic-info-display">
      {content && <p>{content}</p>}
      {link && (
        <div className="button-container-EID">
          <button onClick={handleLinkClick}>
            Ver referencia
          </button>
        </div>
      )}
    </div>
  );
};

export default EthnicInfoDisplay;