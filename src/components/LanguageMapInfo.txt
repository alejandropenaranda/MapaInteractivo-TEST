import React from 'react';
import EthnicLocations from './EthnicLocations';
import "../styles/LanguageMapInfo.css"
import EthnicInteractiveMap from './EthnicInteractiveMap';

interface LanguageMapInfoProps {
  data: {
    ubicaciones: string;
    coords: string;
    enlace7: string;
    linkMapa: string;
    setViewerUrl: (url: string | undefined) => void;
    setReferenceStatus: (visible: boolean | undefined) => void;
  }[];
}

const LanguageMapInfo: React.FC<LanguageMapInfoProps> = ({ data }) => {
  return (
    <div className="language-map-info">
      <h2>¿En dónde están ubicadas las comunidades hablantes de esas lenguas?</h2>
      <p className="subtitle">MAPA DE UBICACIÓN SEGÚN FUENTES BIBLIOGRÁFICAS</p>
      <div className='Mapa'>
        <EthnicInteractiveMap/>
      </div>   
      <EthnicLocations data={data}/>
    </div>
  );
};

export default LanguageMapInfo;