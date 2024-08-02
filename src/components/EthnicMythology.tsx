import React from 'react';
import '../styles/SingleInfo.css';
import EthnicInfoDisplay from './EthnicInfoDisplay';

interface EthnicMythologyProps {
  data: {
    mitologia: string;
    enlace5: string;
    setViewerUrl: (url: string | undefined) => void;
    setReferenceStatus: (visible: boolean | undefined) => void;
  }[];
}

const EthnicMythology: React.FC<EthnicMythologyProps> = ({ data }) => {
  return (
    <div className="single-info">
      <h2>Muestra de mitología, origen, leyendas o costumbres relevantes del grupo étnico</h2>
      <div className="content">
        {data.map((item, index) => (
          item.mitologia && (
          <EthnicInfoDisplay key={index} content={item.mitologia} link={item.enlace5} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus}/>
        )))}
      </div>
    </div>
  );
};

export default EthnicMythology;