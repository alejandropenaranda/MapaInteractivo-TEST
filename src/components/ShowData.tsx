import React from 'react';
import '../styles/SingleInfo.css';
import EthnicInfoDisplay from './EthnicInfoDisplay';

interface ShowDataProps {
  texto: string;
  data: {
    content: string;
    enlace: string;
    setViewerUrl: (url: string | undefined) => void;
    setReferenceStatus: (visible: boolean | undefined) => void;
  }[];
}

const ShowData: React.FC<ShowDataProps> = ({ data, texto }) => {
  return (
    <div className="single-info">
      <h2>{texto}</h2>
      <div className="content">
        {data.map((item, index) => (
          item.content && (
          <EthnicInfoDisplay key={index} content={item.content} link={item.enlace} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus} />
        )))}
      </div>
    </div>
  );
};

export default ShowData;