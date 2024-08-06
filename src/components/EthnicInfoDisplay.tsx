// import React from 'react';
// import '../styles/EthnicInfoDisplay.css';

// interface EthnicInfoDisplayProps {
//   content: string;
//   link?: string;
//   setViewerUrl: (url: string | undefined) => void;
//   setReferenceStatus: (visible: boolean | undefined) => void;
// }

// const EthnicInfoDisplay: React.FC<EthnicInfoDisplayProps> = ({ content, link, setViewerUrl, setReferenceStatus }) => {


//   const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     if (link) {

//       setViewerUrl(link);
//       setReferenceStatus(true);
//       console.log("Estoy cambiando el estado a true")
//       console.log(link)
//     }
//   };

//   return (
//     <div className="ethnic-info-display">
//       {content && <p>{content}</p>}
//       {link && (
//         <div className="button-container-EID">
//           <button onClick={handleLinkClick}>
//             Ver referencia
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EthnicInfoDisplay;

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
      console.log("Estoy cambiando el estado a true");
      console.log(link);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content).then(() => {
      alert('Se ha copiado el contenido');
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  };

  return (
    <div className="ethnic-info-display">
      {content && <p>{content}</p>}
      <div className="button-container-EID">
        {link && (
          <button onClick={handleLinkClick}>
            Ver referencia
          </button>
        )}
        <button onClick={handleCopyClick}>
          Copiar
        </button>
      </div>
    </div>
  );
};

export default EthnicInfoDisplay;

// import React, { useState } from 'react';
// import '../styles/EthnicInfoDisplay.css';

// interface EthnicInfoDisplayProps {
//   content: string;
//   link?: string;
//   setViewerUrl: (url: string | undefined) => void;
//   setReferenceStatus: (visible: boolean | undefined) => void;
// }

// const EthnicInfoDisplay: React.FC<EthnicInfoDisplayProps> = ({ content, link, setViewerUrl, setReferenceStatus }) => {
//   const [copySuccess, setCopySuccess] = useState<string | null>(null);

//   const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     if (link) {
//       setViewerUrl(link);
//       setReferenceStatus(true);
//       console.log("Estoy cambiando el estado a true");
//       console.log(link);
//     }
//   };

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(content).then(() => {
//       setCopySuccess('Contenido copiado al portapapeles');
//       setTimeout(() => setCopySuccess(null), 2000);
//     }).catch(err => {
//       console.error('Error al copiar al portapapeles: ', err);
//     });
//   };

//   return (
//     <div className="ethnic-info-display">
//       {content && <p>{content}</p>}
//       <div className="button-container-EID">
//         {link && (
//           <button onClick={handleLinkClick}>
//             Ver referencia
//           </button>
//         )}
//         <button onClick={handleCopyClick}>
//           Copiar contenido
//         </button>
//       </div>
//       {copySuccess && <div className="copy-alert">{copySuccess}</div>}
//     </div>
//   );
// };

// export default EthnicInfoDisplay;