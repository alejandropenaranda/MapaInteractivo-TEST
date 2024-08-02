// import React, { useState } from 'react';
// import DataLoader from './components/DataLoader';
// import EthnicSelector from './components/EthnicSelector';
// import LanguageNames from './components/LanguageNames';
// import SpeakersCount from './components/SpeakersCount';
// import EthnicMythology from './components/EthnicMythology';
// import CommentsCitations from './components/CommentsCitations';
// import LanguageMapInfo from './components/LanguageMapInfo';
// import EthnicInfoViewer from './components/EthnicInfoViewer';
// import EthnicInteractiveMap from './components/EthnicInteractiveMap';
// import EthnicLocations from './components/EthnicLocations';
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

//   return (
//     <div className="app-container">
//       <div className="header">
//         <h1>MAPA INTERACTIVO DE LENGUAS</h1>
//         <p>En el Vaupés se hablan veinticinco (25) lenguas: 15 de la familia Tucano Oriental, 5 de la familia Arawák, 2 de la familia Nadahup, 1 de la subfamilia Kakua-Nukak, 1 de la familia Caribe, 1 de la familia Tupí.</p>
//       </div>
//       <div className="map-container">
//         <EthnicInteractiveMap/>
//       </div>
//       <div className="content-container">
//         <div className="column-left">
//           <DataLoader setData={setData} />
//           <EthnicSelector data={Object.keys(data)} setSelectedEthnicGroup={setSelectedEthnicGroup} />
//           {/* {selectedEthnicGroupData.length > 0 && (
//             <> */}
//               <div className="button-container">

//               </div>
//               <LanguageNames data={selectedEthnicGroupData.map(item => ({
//                 nombreBase: item.nombreBase ?? '',
//                 enlace1: item.enlace1 ?? '',
//                 nombrePueblo: item.nombrePueblo ?? '',
//                 enlace2: item.enlace2 ?? '',
//                 nombreLengua: item.nombreLengua ?? '',
//                 enlace3: item.enlace3 ?? '',
//                 setViewerUrl: handleSetViewerUrl,
//                 setReferenceStatus: handleSetReferenceStatus,
//               }))} />
//               <SpeakersCount data={selectedEthnicGroupData.map(item => ({
//                 hablantes: item.hablantes ?? '',
//                 enlace4: item.enlace4 ?? '',
//                 setViewerUrl: handleSetViewerUrl,
//                 setReferenceStatus: handleSetReferenceStatus,
//               }))} />
//               <EthnicMythology data={selectedEthnicGroupData.map(item => ({
//                 mitologia: item.mitologia ?? '',
//                 enlace5: item.enlace5 ?? '',
//                 setViewerUrl: handleSetViewerUrl,
//                 setReferenceStatus: handleSetReferenceStatus,
//               }))} />
//               <CommentsCitations data={selectedEthnicGroupData.map(item => ({
//                 comentarios: item.comentarios ?? '',
//                 enlace6: item.enlace6 ?? '',
//                 setViewerUrl: handleSetViewerUrl,
//                 setReferenceStatus: handleSetReferenceStatus,
//               }))} />
//               <EthnicLocations data={selectedEthnicGroupData.map(item => ({
//                 ubicaciones: item.ubicaciones ?? '',
//                 coords: item.coords ?? '',
//                 enlace7: item.enlace7 ?? '',
//                 linkMapa: item.linkMapa ?? '',
//                 setViewerUrl: handleSetViewerUrl,
//                 setReferenceStatus: handleSetReferenceStatus,
//               }))} />
//               {/* </>
//             )} */}
//         </div>
//         <div className="column-right">
//           <EthnicInfoViewer initialUrl={viewerUrl} status={referenceStatus} setReferenceStatus = {handleSetReferenceStatus}  />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// Segunda version

// import React, { useState } from 'react';
// import DataLoader from './components/DataLoader';
// import EthnicSelector from './components/EthnicSelector';
// import LanguageNames from './components/LanguageNames';
// import SpeakersCount from './components/SpeakersCount';
// import EthnicMythology from './components/EthnicMythology';
// import CommentsCitations from './components/CommentsCitations';
// import LanguageMapInfo from './components/LanguageMapInfo';
// import EthnicInfoViewer from './components/EthnicInfoViewer';
// import EthnicInteractiveMap from './components/EthnicInteractiveMap';
// import EthnicLocations from './components/EthnicLocations';
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
// }

// const App: React.FC = () => {
//   const [data, setData] = useState<{ [name: string]: EthnicGroup[] }>({});
//   const [selectedEthnicGroup, setSelectedEthnicGroup] = useState<string | null>(null);
//   const [viewerUrl, setViewerUrl] = useState<string | undefined>(undefined);
//   const [referenceStatus, setReferenceStatus] = useState<boolean>(true);
//   const [activeComponent, setActiveComponent] = useState<string | null>(null);

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

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'Nombres':
//         return (
//           <LanguageNames data={selectedEthnicGroupData.map(item => ({
//             nombreBase: item.nombreBase ?? '',
//             enlace1: item.enlace1 ?? '',
//             nombrePueblo: item.nombrePueblo ?? '',
//             enlace2: item.enlace2 ?? '',
//             nombreLengua: item.nombreLengua ?? '',
//             enlace3: item.enlace3 ?? '',
//             setViewerUrl: handleSetViewerUrl,
//             setReferenceStatus: handleSetReferenceStatus,
//           }))} />
//         );
//       case 'Hablantes':
//         return (
//           <SpeakersCount data={selectedEthnicGroupData.map(item => ({
//             hablantes: item.hablantes ?? '',
//             enlace4: item.enlace4 ?? '',
//             setViewerUrl: handleSetViewerUrl,
//             setReferenceStatus: handleSetReferenceStatus,
//           }))} />
//         );
//       case 'Mitología y cosmovisión':
//         return (
//           <EthnicMythology data={selectedEthnicGroupData.map(item => ({
//             mitologia: item.mitologia ?? '',
//             enlace5: item.enlace5 ?? '',
//             setViewerUrl: handleSetViewerUrl,
//             setReferenceStatus: handleSetReferenceStatus,
//           }))} />
//         );
//       case 'Ubicaciones':
//         return (
//           <EthnicLocations data={selectedEthnicGroupData.map(item => ({
//             ubicaciones: item.ubicaciones ?? '',
//             coords: item.coords ?? '',
//             enlace7: item.enlace7 ?? '',
//             linkMapa: item.linkMapa ?? '',
//             setViewerUrl: handleSetViewerUrl,
//             setReferenceStatus: handleSetReferenceStatus,
//           }))} />
//         );
//       case 'Extra':
//         return (
//           <CommentsCitations data={selectedEthnicGroupData.map(item => ({
//             comentarios: item.comentarios ?? '',
//             enlace6: item.enlace6 ?? '',
//             setViewerUrl: handleSetViewerUrl,
//             setReferenceStatus: handleSetReferenceStatus,
//           }))} />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="header">
//         <h1>MAPA INTERACTIVO DE LENGUAS</h1>
//         <p>En el Vaupés se hablan veinticinco (25) lenguas: 15 de la familia Tucano Oriental, 5 de la familia Arawák, 2 de la familia Nadahup, 1 de la subfamilia Kakua-Nukak, 1 de la familia Caribe, 1 de la familia Tupí.</p>
//       </div>
//       <div className="map-container">
//         <EthnicInteractiveMap/>
//       </div>
//       <div className="content-container">
//         <div className="column-left">
//           <DataLoader setData={setData} />
//           <EthnicSelector data={Object.keys(data)} setSelectedEthnicGroup={setSelectedEthnicGroup} />
//           <div className="button-container">
//             <button onClick={() => setActiveComponent('Nombres')}>Nombres</button>
//             <button onClick={() => setActiveComponent('Hablantes')}>Hablantes</button>
//             <button onClick={() => setActiveComponent('Mitología y cosmovisión')}>Mitología y cosmovisión</button>
//             <button onClick={() => setActiveComponent('Ubicaciones')}>Ubicaciones</button>
//             <button onClick={() => setActiveComponent('Extra')}>Extra</button>
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
import LanguageNames from './components/LanguageNames';
// import SpeakersCount from './components/SpeakersCount';
// import EthnicMythology from './components/EthnicMythology';
// import CommentsCitations from './components/CommentsCitations';
import EthnicInfoViewer from './components/EthnicInfoViewer';
import EthnicInteractiveMap from './components/EthnicInteractiveMap';
// import EthnicLocations from './components/EthnicLocations';
import ShowData from './components/ShowData';
import './styles/App.css';

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
  // [key: string]: any;
}

const App: React.FC = () => {
  const [data, setData] = useState<{ [name: string]: EthnicGroup[] }>({});
  const [selectedEthnicGroup, setSelectedEthnicGroup] = useState<string | null>(null);
  const [viewerUrl, setViewerUrl] = useState<string | undefined>(undefined);
  const [referenceStatus, setReferenceStatus] = useState<boolean>(true);
  const [activeComponent, setActiveComponent] = useState<string>('Nombres'); // Estado para el botón activo

  const selectedEthnicGroupData = selectedEthnicGroup ? data[selectedEthnicGroup] : [];

  const handleSetViewerUrl = (url: string | undefined) => {
    setViewerUrl(url);
    setReferenceStatus(true); // Mostrar la referencia cuando se establece una nueva URL
  };

  const handleSetReferenceStatus = (visible: boolean | undefined) => {
    if (visible !== undefined) {
      setReferenceStatus(visible);
    }
  };

  // return <SpeakersCount data={selectedEthnicGroupData.map(item => ({
        //   hablantes: item.hablantes ?? '',
        //   enlace4: item.enlace4 ?? '',
        //   setViewerUrl: handleSetViewerUrl,
        //   setReferenceStatus: handleSetReferenceStatus,
        // }))}/>;

      // return <EthnicMythology data={selectedEthnicGroupData.map(item => ({
      //   mitologia: item.mitologia ?? '',
      //   enlace5: item.enlace5 ?? '',
      //   setViewerUrl: handleSetViewerUrl,
      //   setReferenceStatus: handleSetReferenceStatus,
      // }))} />;

      // return <CommentsCitations data={selectedEthnicGroupData.map(item => ({
      //   comentarios: item.comentarios ?? '',
      //   enlace6: item.enlace6 ?? '',
      //   setViewerUrl: handleSetViewerUrl,
      //   setReferenceStatus: handleSetReferenceStatus,
      // }))} />;

      // return <EthnicLocations data={selectedEthnicGroupData.map(item => ({
      //   ubicaciones: item.ubicaciones ?? '',
      //   coords: item.coords ?? '',
      //   enlace7: item.enlace7 ?? '',
      //   linkMapa: item.linkMapa ?? '',
      //   setViewerUrl: handleSetViewerUrl,
      //   setReferenceStatus: handleSetReferenceStatus,
      // }))} />;

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Nombres':
        return <LanguageNames data={selectedEthnicGroupData.map(item => ({
          nombreBase: item.nombreBase ?? '',
          enlace1: item.enlace1 ?? '',
          nombrePueblo: item.nombrePueblo ?? '',
          enlace2: item.enlace2 ?? '',
          nombreLengua: item.nombreLengua ?? '',
          enlace3: item.enlace3 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} />;
      case 'Hablantes':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.hablantes ?? '',
          enlace: item.enlace4 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="Numero de Hablantes"/>;
      case 'Mitología':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.mitologia ?? '',
          enlace: item.enlace5 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="Mitología y Cosmovisión"/>;
      case 'Ubicaciones':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.ubicaciones ?? '',
          enlace: item.enlace7 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto="¿En dónde están ubicadas las comunidades hablantes de esas lenguas?"/>;
      case 'Más info':
        return <ShowData data={selectedEthnicGroupData.map(item => ({
          content: item.comentarios ?? '',
          enlace: item.enlace6 ?? '',
          setViewerUrl: handleSetViewerUrl,
          setReferenceStatus: handleSetReferenceStatus,
        }))} texto='Datos Extras'/>;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <img src='/title.png'></img>
        <p>En el Vaupés se hablan veinticinco (25) lenguas: 15 de la familia Tucano Oriental, 5 de la familia Arawák, 2 de la familia Nadahup, 1 de la subfamilia Kakua-Nukak, 1 de la familia Caribe, 1 de la familia Tupí.</p>
      </div>
      <div className="map-container">
        <EthnicInteractiveMap />
      </div>
      <div className="content-container">
        <div className="column-left">
          <DataLoader setData={setData} />
          <EthnicSelector data={Object.keys(data)} setSelectedEthnicGroup={setSelectedEthnicGroup} />
          <div className="button-container">
            {['Nombres', 'Hablantes', 'Mitología', 'Ubicaciones', 'Más info'].map((buttonName) => (
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
    </div>
  );
};

export default App;