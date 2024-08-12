// -----------------------------VERSION BUENA-----------------------------------------


// import React, { useState } from 'react';
// import DataLoader from './components/DataLoader';
// import EthnicSelector from './components/EthnicSelector';
// import LanguageNames from './components/LanguageNames';
// // import SpeakersCount from './components/SpeakersCount';
// // import EthnicMythology from './components/EthnicMythology';
// // import CommentsCitations from './components/CommentsCitations';
// import EthnicInfoViewer from './components/EthnicInfoViewer';
// import EthnicInteractiveMap from './components/EthnicInteractiveMap';
// // import EthnicLocations from './components/EthnicLocations';
// import ShowData from './components/ShowData';
// import './styles/App.css';

// interface EthnicGroup {
//   name: string;
//   nombreBase?: string;
//   nombrePueblo?: string;
//   nombreLengua?: string;
//   hablantes?: string;
//   mitologia?: string;
//   comentarios?: string;
//   ubicaciones?: string;
//   coords?: string;
//   linkMapa?: string;
//   enlace1?: string;
//   enlace2?: string;
//   enlace3?: string;
//   enlace4?: string;
//   enlace5?: string;
//   enlace6?: string;
//   enlace7?: string;
//   // [key: string]: any;
// }

// const App: React.FC = () => {
//   const [data, setData] = useState<{ [name: string]: EthnicGroup[] }>({});
//   const [selectedEthnicGroup, setSelectedEthnicGroup] = useState<string | null>(null);
//   const [viewerUrl, setViewerUrl] = useState<string | undefined>(undefined);
//   const [referenceStatus, setReferenceStatus] = useState<boolean>(true);
//   const [activeComponent, setActiveComponent] = useState<string>('Nombres'); // Estado para el botón activo

//   const selectedEthnicGroupData = selectedEthnicGroup ? data[selectedEthnicGroup] : [];

//   const handleSetViewerUrl = (url: string | undefined) => {
//     setViewerUrl(url);
//     setReferenceStatus(true); // Mostrar la referencia cuando se establece una nueva URL
//   };

//   const handleSetReferenceStatus = (visible: boolean | undefined) => {
//     if (visible !== undefined) {
//       setReferenceStatus(visible);
//     }
//   };

//   // return <SpeakersCount data={selectedEthnicGroupData.map(item => ({
//         //   hablantes: item.hablantes ?? '',
//         //   enlace4: item.enlace4 ?? '',
//         //   setViewerUrl: handleSetViewerUrl,
//         //   setReferenceStatus: handleSetReferenceStatus,
//         // }))}/>;

//       // return <EthnicMythology data={selectedEthnicGroupData.map(item => ({
//       //   mitologia: item.mitologia ?? '',
//       //   enlace5: item.enlace5 ?? '',
//       //   setViewerUrl: handleSetViewerUrl,
//       //   setReferenceStatus: handleSetReferenceStatus,
//       // }))} />;

//       // return <CommentsCitations data={selectedEthnicGroupData.map(item => ({
//       //   comentarios: item.comentarios ?? '',
//       //   enlace6: item.enlace6 ?? '',
//       //   setViewerUrl: handleSetViewerUrl,
//       //   setReferenceStatus: handleSetReferenceStatus,
//       // }))} />;

//       // return <EthnicLocations data={selectedEthnicGroupData.map(item => ({
//       //   ubicaciones: item.ubicaciones ?? '',
//       //   coords: item.coords ?? '',
//       //   enlace7: item.enlace7 ?? '',
//       //   linkMapa: item.linkMapa ?? '',
//       //   setViewerUrl: handleSetViewerUrl,
//       //   setReferenceStatus: handleSetReferenceStatus,
//       // }))} />;

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'Nombres':
//         return <LanguageNames data={selectedEthnicGroupData.map(item => ({
//           nombreBase: item.nombreBase ?? '',
//           enlace1: item.enlace1 ?? '',
//           nombrePueblo: item.nombrePueblo ?? '',
//           enlace2: item.enlace2 ?? '',
//           nombreLengua: item.nombreLengua ?? '',
//           enlace3: item.enlace3 ?? '',
//           setViewerUrl: handleSetViewerUrl,
//           setReferenceStatus: handleSetReferenceStatus,
//         }))} />;
//       case 'Hablantes':
//         return <ShowData data={selectedEthnicGroupData.map(item => ({
//           content: item.hablantes ?? '',
//           enlace: item.enlace4 ?? '',
//           setViewerUrl: handleSetViewerUrl,
//           setReferenceStatus: handleSetReferenceStatus,
//         }))} texto="Numero de Hablantes"/>;
//       case 'Mitología':
//         return <ShowData data={selectedEthnicGroupData.map(item => ({
//           content: item.mitologia ?? '',
//           enlace: item.enlace5 ?? '',
//           setViewerUrl: handleSetViewerUrl,
//           setReferenceStatus: handleSetReferenceStatus,
//         }))} texto="Mitología y Cosmovisión"/>;
//       case 'Ubicaciones':
//         return <ShowData data={selectedEthnicGroupData.map(item => ({
//           content: item.ubicaciones ?? '',
//           enlace: item.enlace7 ?? '',
//           setViewerUrl: handleSetViewerUrl,
//           setReferenceStatus: handleSetReferenceStatus,
//         }))} texto="¿En dónde están ubicadas las comunidades hablantes de esas lenguas?"/>;
//       case 'Más info':
//         return <ShowData data={selectedEthnicGroupData.map(item => ({
//           content: item.comentarios ?? '',
//           enlace: item.enlace6 ?? '',
//           setViewerUrl: handleSetViewerUrl,
//           setReferenceStatus: handleSetReferenceStatus,
//         }))} texto='Datos Extras'/>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="header">
//         <img src='/title.png'></img>
//         <p>En el Vaupés se hablan veinticinco (25) lenguas: 15 de la familia Tucano Oriental, 5 de la familia Arawák, 2 de la familia Nadahup, 1 de la subfamilia Kakua-Nukak, 1 de la familia Caribe, 1 de la familia Tupí.</p>
//       </div>
//       <div className="map-container">
//         <EthnicInteractiveMap />
//       </div>
//       <div className="content-container">
//         <div className="column-left">
//           <DataLoader setData={setData} />
//           <EthnicSelector data={Object.keys(data)} setSelectedEthnicGroup={setSelectedEthnicGroup} />
//           <div className="button-container">
//             {['Nombres', 'Hablantes', 'Mitología', 'Ubicaciones', 'Más info'].map((buttonName) => (
//               <button
//                 key={buttonName}
//                 className={activeComponent === buttonName ? 'active' : ''}
//                 onClick={() => setActiveComponent(buttonName)}
//               >
//                 {buttonName}
//               </button>
//             ))}
//           </div>
//           {renderComponent()}
//         </div>
//         <div className="column-right">
//           <EthnicInfoViewer initialUrl={viewerUrl} status={referenceStatus} setReferenceStatus={handleSetReferenceStatus} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import DataLoader from './components/DataLoader';
import EthnicSelector from './components/EthnicSelector';
import EthnicInfoViewer from './components/EthnicInfoViewer';
import EthnicInteractiveMap from './components/EthnicInteractiveMap';
import ShowData from './components/ShowData';
import './styles/App.css';
import { LatLngTuple } from 'leaflet';

interface EthnicGroup {
  name: string;
  nombreBase?: string;
  nombrePueblo?: string;
  nombreLengua?: string;
  hablantes?: string;
  mitologia?: string;
  comentarios?: string;
  ubicaciones?: string;
  coords?: string;
  linkMapa?: string;
  enlace1?: string;
  enlace2?: string;
  enlace3?: string;
  enlace4?: string;
  enlace5?: string;
  enlace6?: string;
  enlace7?: string;
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
  .map(item => {
    const coordsArray = item.coords ? item.coords.split(',').map(Number) : [];
    if (coordsArray.length === 2) {
      const geocode: LatLngTuple = [coordsArray[0], coordsArray[1]];
      return {
        geocode,
        popUp: item.ubicaciones ?? ''
      };
    }
    return null;
  })
  .filter(marker => marker !== null);

  const renderComponent = () => {
    switch (activeComponent) {

      case 'Nombre Exógeno':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.nombreBase ?? '',
          enlace: item.enlace1 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cómo nombran al pueblo y su lengua según fuentes bibliográficas?"/>;

      case 'Nombre del pueblo':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.nombrePueblo ?? '',
          enlace: item.enlace2 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cuál es el nombre autóctono del pueblo?"/>;

      case 'Nombre de la Lengua':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.nombreLengua ?? '',
          enlace: item.enlace3 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cómo se llama la lengua según sus hablantes?"/>;
      case 'Ubicación':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.ubicaciones ?? '',
          enlace: item.enlace7 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Dónde se encuentran las comunidades hablantes de esta lengua según fuentes bibliográficas?"/>;
      case 'Número de hablantes':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.hablantes ?? '',
          enlace: item.enlace4 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cuántas personas hablan esta lengua según fuentes bibliográficas?"/>;
      case 'Mitología':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.mitologia ?? '',
          enlace: item.enlace5 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿Cuáles son las mitologías y leyendas esenciales de este pueblo según algunos estudios?"/>;
      
      case 'Más info':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.comentarios ?? '',
          enlace: item.enlace6 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto='¿Qué información adicional se ha documentado sobre el pueblo y su lengua?'/>;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <img src='/title.png' alt="Título"/>
        <p>En el Vaupés se hablan veinticinco (25) lenguas: 15 de la familia Tucano Oriental, 5 de la familia Arawák, 2 de la familia Nadahup, 1 de la subfamilia Kakua-Nukak, 1 de la familia Caribe, 1 de la familia Tupí.</p>
      </div>
      {selectedEthnicGroupData.some(item => item.coords) && (
        <div className="map-container">
          <EthnicInteractiveMap markers={markersData} />
        </div>
      )}
      <div className="content-container">
        <div className="column-left">
          <DataLoader setData={setData} />
          <EthnicSelector data={Object.keys(data)} setSelectedEthnicGroup={setSelectedEthnicGroup} />
          <div className="button-container">
            {['Nombre Exógeno','Nombre del pueblo','Nombre de la Lengua','Ubicación','Número de hablantes','Mitología', 'Más info'].map((buttonName) => (
              <button
                key={buttonName}
                className={activeComponent === buttonName ? 'active' : ''}
                onClick={() => setActiveComponent(buttonName)}
              >
                {buttonName}
              </button>
            ))}
          </div>
          {renderComponent()}
        </div>
        <div className="column-right">
          <EthnicInfoViewer initialUrl={viewerUrl} status={referenceStatus} setReferenceStatus={handleSetReferenceStatus} />
        </div>
      </div>
      <div className="footer-container">
            <p><strong>Nota aclaratoria:</strong> Este mapa interactivo ha sido creado como parte de un proyecto de investigación y se basa en fuentes bibliográficas y testimonios disponibles. La información aquí presentada puede no reflejar todos los aspectos de las lenguas y culturas documentadas, y no debe considerarse como una única verdad. Aunque se ha extraído de textos, estudios y otras fuentes documentales, la interpretación de los datos puede variar. Se recomienda utilizar este recurso como una guía y consultar las fuentes originales para obtener una visión más completa. La información presentada no refleja necesariamente las opiniones de los coordinadores, financiadores, colaboradores o participantes del proyecto.</p>
            <p>Última actualización realizada el [fecha exacta].
            <br/>Los datos y contenidos de este mapa han sido recopilados y verificados desde [fecha de inicio] hasta [fecha final].</p>
      </div>
    </div>
  );
};

export default App;