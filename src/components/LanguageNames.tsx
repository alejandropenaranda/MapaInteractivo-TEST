import React from 'react';
import EthnicInfoDisplay from './EthnicInfoDisplay';
import '../styles/LanguageNames.css';

interface LanguageNamesProps {
  data: {
    nombreBase: string;
    enlace1: string;
    nombrePueblo: string;
    enlace2: string;
    nombreLengua: string;
    enlace3: string;
    setViewerUrl: (url: string | undefined) => void;
    setReferenceStatus: (visible: boolean | undefined) => void;
  }[];
}

const LanguageNames: React.FC<LanguageNamesProps> = ({ data }) => {
  return (
    <div className="language-names">
      <h2>Formas de nombrar la lengua</h2>
      <div className="table">
        <div className="row">
          <div className="title"><p>Nombre de base para el pueblo y la lengua (en negrilla); otras ortografías y designaciones exógenas:</p></div>
          <div className="content">
            {data.map((item, index) =>(
              item.nombreBase && (
                <EthnicInfoDisplay key={index} content={item.nombreBase} link={item.enlace1} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus}/>
              )
            ))}
          </div>
        </div>
        <div className="row">
          <div className="title"><p>Nombre del pueblo en la propia lengua - autónimo:</p></div>
          <div className="content">
            {data.map((item, index) =>(
              item.nombrePueblo && (
                <EthnicInfoDisplay key={index} content={item.nombrePueblo} link={item.enlace2} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus} />
              )
            ))}
          </div>
        </div>
        <div className="row">
          <div className="title"><p>Nombre de la lengua en la propia lengua:</p></div>
          <div className="content">
            {data.map((item, index) =>(
              item.nombreLengua && (
                <EthnicInfoDisplay key={index} content={item.nombreLengua} link={item.enlace3} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus}/>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageNames;