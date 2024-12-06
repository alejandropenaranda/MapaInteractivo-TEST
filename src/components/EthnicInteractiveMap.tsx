/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon, point, LatLngExpression } from 'leaflet';
import '../styles/EthnicInteractiveMap.css';
import 'leaflet/dist/leaflet.css';
import icono from '../assets/placeholder.png';
import HomeIcon from '../assets/icons/HomeIcon.svg';

interface MarkerData {
  geocode: LatLngExpression;
  popUp: string;
}

interface EthnicInteractiveMapProps {
  markers: MarkerData[];
}

const initialCenter: LatLngExpression = [0.39985118661025154, -70.60133169195446];
const initialZoom = 8;

const customIcon = new Icon({
  iconUrl: icono,
  iconSize: [38, 38], 
});

const createClusterCustomIcon = function (cluster: any) {
  return divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  });
};

const ResetViewButton: React.FC = () => {
  const map = useMap();

  const resetView = () => {
    map.setView(initialCenter, initialZoom);
  };

  return (
    <div className="reset-view-button-container">
      <button className="reset-view-button" onClick={resetView} title="Volver al inicio">
        <img src={HomeIcon} alt="Reset" style={{ width: '14px', height: '15px' }} />
      </button>
    </div>
  );
};

const EthnicInteractiveMap: React.FC<EthnicInteractiveMapProps> = ({ markers }) => {
  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
        maxClusterRadius={55}
      >
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <ResetViewButton />
    </MapContainer>
  );
};

export default EthnicInteractiveMap;
