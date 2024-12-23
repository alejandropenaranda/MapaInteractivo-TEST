/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import DataLoader from './components/DataLoader';
import EthnicSelector from './components/EthnicSelector';
import EthnicInfoViewer from './components/EthnicInfoViewer';
// import EthnicInteractiveMap from './components/EthnicInteractiveMap';
import ShowData from './components/ShowData';
import IconButton from './components/IconButton';
import './styles/App.css';
import { LatLngTuple } from 'leaflet';
import masInfo from './assets/icons/MásInfoActive.svg'
import masInfoI from './assets/icons/MásInfoInactive.svg'
import nombreEx from './assets/icons/NombreExoActive.svg'
import nombreExI from './assets/icons/NombreExoInactive.svg'
import nombreLa from './assets/icons/NombreLengActive.svg'
import nombreLaI from './assets/icons/NombreLengInactive.svg'
import nombrePo from './assets/icons/NombrePueActive.svg'
import nombrePoI from './assets/icons/NombrePueInactive.svg'
import numeroHa from './assets/icons/NumHabActive.svg'
import numeroHaI from './assets/icons/NumHabInative.svg'
import mitologia from './assets/icons/MitologíaActive.svg'
import mitologiaI from './assets/icons/MitologíaInactive.svg'
import ubicacion from './assets/icons/UbicaciónActive.svg'
import ubicacionI from './assets/icons/UbicaciónInactive.svg'

interface EthnicGroup {
  name: string;
  nombreBase?: string;
  nombrePueblo?: string;
  nombreLengua?: string;
  hablantes?: string;
  mitologia?: string;
  comentarios?: string;
  ubicaciones?: string;
  coords?: [number, number][];
  linkMapa?: string;
  enlace1?: string;
  enlace2?: string;
  enlace3?: string;
  enlace4?: string;
  enlace5?: string;
  enlace6?: string;
  enlace7?: string;
  [key: string]: any;
}

const App: React.FC = () => {
  const [data, setData] = useState<{ [name: string]: EthnicGroup[] }>({});
  const [selectedEthnicGroup, setSelectedEthnicGroup] = useState<string | null>(null);
  const [viewerUrl, setViewerUrl] = useState<string | undefined>(undefined);
  const [referenceStatus, setReferenceStatus] = useState<boolean>(true);
  const [activeComponent, setActiveComponent] = useState<string>('Nombre Exógeno');

  const selectedEthnicGroupData = selectedEthnicGroup ? data[selectedEthnicGroup] : [];

  const handleSetViewerUrl = (url: string | undefined) => {
    setViewerUrl(url);
    setReferenceStatus(true);
  };

  const handleSetReferenceStatus = (visible: boolean | undefined) => {
    if (visible !== undefined) {
      setReferenceStatus(visible);
    }
  };

  const markersData = selectedEthnicGroupData
  .flatMap(item => {
    if (item.coords && item.coords.length > 0) {
      return item.coords.map((coordTuple) => ({
        geocode: coordTuple as LatLngTuple,
        popUp: item.ubicaciones ?? ''
      }));
    }
    return [];
  })
  .filter(marker => marker.geocode && marker.popUp);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Nombre Exógeno':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.nombreBase ?? '',
          enlace: item.enlace1 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cómo nombran al pueblo y su lengua según fuentes bibliográficas?" />;

      case 'Nombre del pueblo':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.nombrePueblo ?? '',
          enlace: item.enlace2 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cómo se autodenomina el pueblo?" />;

      case 'Nombre de la Lengua':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.nombreLengua ?? '',
          enlace: item.enlace3 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cómo se llama la lengua según sus hablantes?" />;
      case 'Ubicación':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.ubicaciones ?? '',
          enlace: item.enlace7 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Dónde se encuentran las comunidades hablantes de esta lengua según fuentes bibliográficas?" />;
      case 'Número de hablantes':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.hablantes ?? '',
          enlace: item.enlace4 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cuántas personas hablan esta lengua según fuentes bibliográficas?" />;
      case 'Mitología':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.mitologia ?? '',
          enlace: item.enlace5 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cuáles son algunas de las mitologías y leyendas conocidas de este pueblo según algunos estudios?" />;

      case 'Más info':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.comentarios ?? '',
          enlace: item.enlace6 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto='¿Qué información adicional se ha documentado sobre el pueblo y su lengua?' />;
      default:
        return null;
    }
  };
  interface ButtonIcons {
    [key: string]: {
      active: string;
      inactive: string;
    };
  }
  const buttonIcons: ButtonIcons = {
    'Nombre Exógeno': { active: nombreEx, inactive: nombreExI },
    'Nombre del pueblo': { active: nombrePo, inactive: nombrePoI },
    'Nombre de la Lengua': { active: nombreLa, inactive: nombreLaI },
    'Ubicación': { active: ubicacion, inactive: ubicacionI },
    'Número de hablantes': { active: numeroHa, inactive: numeroHaI },
    'Mitología': { active: mitologia , inactive: mitologiaI },
    'Más info': { active: masInfo, inactive: masInfoI }
  }

  const formatClassName = (name:string) => {
    const formated = `icon-${name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
    return formated;
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <DataLoader setData={setData} />
        <p>Actualizado hasta agosto de 2024*.</p>
        <EthnicSelector data={Object.keys(data)} setSelectedEthnicGroup={setSelectedEthnicGroup} />
        <div className="button-container">
          {/* {['Nombre Exógeno', 'Nombre del pueblo', 'Nombre de la Lengua', 'Ubicación', 'Número de hablantes', 'Mitología', 'Más info'].map((buttonName) => ( */}
          {['Nombre Exógeno', 'Nombre del pueblo', 'Nombre de la Lengua', 'Número de hablantes', 'Mitología', 'Más info'].map((buttonName) => (
            <IconButton
              key={buttonName}
              activeIcon={<img src={buttonIcons[buttonName].active} alt="example" className={`${formatClassName(buttonName)} active`} />}
              inactiveIcon={<img src={buttonIcons[buttonName].inactive} alt="example" className={`${formatClassName(buttonName)} active`} />}
              text={buttonName}
              onClick={() => setActiveComponent(buttonName)}
              isActive={activeComponent === buttonName}
            />
          ))}
        </div>
        {/* {selectedEthnicGroupData.some(item => item.coords) && activeComponent === 'Ubicación' && (<>
          <h2>Mapa de ubicación según fuentes bibliográficas</h2>
          <div className="map-container">
            <EthnicInteractiveMap markers={markersData} />
          </div>
        </>
        )} */}
        {renderComponent()}
        <EthnicInfoViewer initialUrl={viewerUrl} status={referenceStatus} setReferenceStatus={handleSetReferenceStatus} />
      </div>
      <div className="footer-container">
        {/* <p><strong>*Nota aclaratoria:</strong>La información presentada en este mapa interactivo ha sido extraída de textos, estudios y otras fuentes documentales. Esta información no debe considerarse como una única verdad ni refleja necesariamente las opiniones de los coordinadores, financiadores, colaboradores o participantes del proyecto. La interpretación de los datos puede variar y se recomienda consultar las fuentes originales para obtener una visión más completa.</p> */}
        <p><strong>*Nota aclaratoria:</strong>La información presentada en este tablero de consulta ha sido extraída de textos, estudios y otras fuentes documentales. Esta información no debe considerarse como una única verdad ni refleja necesariamente las opiniones de los coordinadores, financiadores, colaboradores o participantes del proyecto. La interpretación de los datos puede variar y se recomienda consultar las fuentes originales para obtener una visión más completa.</p>
      
      </div>
    </div>
  );
};

export default App;