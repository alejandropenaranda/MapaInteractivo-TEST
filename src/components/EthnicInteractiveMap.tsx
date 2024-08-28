import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon, point, LatLngExpression } from 'leaflet';
import '../styles/EthnicInteractiveMap.css';
import 'leaflet/dist/leaflet.css';
import icono from '../assets/placeholder.png';

// Define the type for the marker data
interface MarkerData {
  geocode: LatLngExpression;
  popUp: string;
}

interface EthnicInteractiveMapProps {
  markers: MarkerData[];
}

// Create custom icon
const customIcon = new Icon({
  iconUrl: icono,
  iconSize: [38, 38], // size of the icon
});

// Custom cluster icon
const createClusterCustomIcon = function (cluster: any) {
  return divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  });
};

const EthnicInteractiveMap: React.FC<EthnicInteractiveMapProps> = ({ markers }) => {
  return (
    <MapContainer center={[0.39985118661025154, -70.60133169195446]} zoom={8}  zoomControl={false} style={{ height: '100%', width: '100%' }} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position='topright'/>
      <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default EthnicInteractiveMap;
