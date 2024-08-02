import React from 'react';
import '../styles/SingleInfo.css';
import EthnicInfoDisplay from './EthnicInfoDisplay';

interface EthnicLocationsProps {
  data: {
    ubicaciones: string;
    // coords: string;
    enlace7: string;
    // linkMapa: string;
    setViewerUrl: (url: string | undefined) => void;
    setReferenceStatus: (visible: boolean | undefined) => void;
  }[];
}

const EthnicLocations: React.FC<EthnicLocationsProps> = ({ data }) => {
  return (
    <div className="single-info">
    <h2>¿En dónde están ubicadas las comunidades hablantes de esas lenguas?</h2>
    <div className='content'>
      {data.map((item, index) => (
        item.ubicaciones && (
        <EthnicInfoDisplay key={index} content={item.ubicaciones} link={item.enlace7} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus}/>
      )))}
    </div>
  </div>
  );
};

export default EthnicLocations;
