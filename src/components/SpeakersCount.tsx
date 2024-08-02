import React from 'react';
import '../styles/SingleInfo.css';
import EthnicInfoDisplay from './EthnicInfoDisplay';

interface SpeakersCountProps {
  data: {
    hablantes: string;
    enlace4: string;
    setViewerUrl: (url: string | undefined) => void;
    setReferenceStatus: (visible: boolean | undefined) => void;
  }[];
}

const SpeakersCount: React.FC<SpeakersCountProps> = ({ data }) => {
  return (
    <div className="single-info">
      <h2>Numero de Hablantes</h2>
      <div className="content">
        {data.map((item, index) => (
          item.hablantes && (
          <EthnicInfoDisplay key={index} content={item.hablantes} link={item.enlace4} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus} />
        )))}
      </div>
    </div>
  );
};

export default SpeakersCount;