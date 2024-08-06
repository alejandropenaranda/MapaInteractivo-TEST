// import React, { useEffect, useState } from 'react';
// import '../styles/EthnicInfoViewer.css';

// interface EthnicInfoViewerProps {
//   initialUrl?: string;
//   status?: boolean;
//   setReferenceStatus: (visible: boolean | undefined) => void;
// }

// const EthnicInfoViewer: React.FC<EthnicInfoViewerProps> = ({ initialUrl}) => { // setReferenceStatus}) => {
//   const [url, setUrl] = useState<string | undefined>(initialUrl);

//   useEffect(() => {
//     setUrl(initialUrl);
//   }, [initialUrl]);

//   const handleVisitReference = () => {
//     if (url) {
//       window.open(url, '_blank');
//     }
//   };

//   return (
//     <div>
//         <div className="ethnic-info-viewer">
//         <div className="title-container">
//           <h2>Repositorio</h2>
//         </div>  
//           <iframe
//             src={url}
//             title="Reference"
//             className="reference-iframe"
//           />
//           {url && (
//           <div className="button-container-EIV">
//             <button onClick={handleVisitReference}>
//               Visitar referencia
//             </button>
//           </div>
//           )} 
//         </div>
//     </div>
//   );
// };

// export default EthnicInfoViewer;

import React, { useEffect, useState } from 'react';
import '../styles/EthnicInfoViewer.css';

interface EthnicInfoViewerProps {
  initialUrl?: string;
  status?: boolean;
  setReferenceStatus: (visible: boolean | undefined) => void;
}

const EthnicInfoViewer: React.FC<EthnicInfoViewerProps> = ({ initialUrl }) => { // setReferenceStatus}) => {
  const [url, setUrl] = useState<string | undefined>(initialUrl);

  useEffect(() => {
    setUrl(initialUrl);
  }, [initialUrl]);

  const handleVisitReference = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div>
      <div className="ethnic-info-viewer">
        <div className="title-container">
          <h2>Repositorio</h2>
        </div>  
        <div className="iframe-container">
          <iframe
            src={url}
            title="Reference"
            className="reference-iframe"
          />
        </div>
        {url && (
          <div className="button-container-EIV">
            <button onClick={handleVisitReference}>
              Visitar referencia
            </button>
          </div>
        )} 
      </div>
    </div>
  );
};

export default EthnicInfoViewer;