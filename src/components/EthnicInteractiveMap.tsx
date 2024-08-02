import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon, point, LatLngExpression } from 'leaflet';
import '../styles/EthnicInteractiveMap.css';
import 'leaflet/dist/leaflet.css';
import icono from '../assets/placeholder.png'

// Define the type for the marker data
interface MarkerData {
  geocode: LatLngExpression;
  popUp: string;
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

// Markers data
const markers: MarkerData[] = [
  {
    geocode: [1.287369497618606, -70.24090183854712],
    popUp: 'comunidad santa marta pamiva - cubeo',
  },
  {
    geocode: [1.23487641168136, -70.23362822936416],
    popUp: 'parque infantil barrio 12 de octubre',
  },
  {
    geocode: [1.2623145640013627, -70.21816852957885],
    popUp: 'Comunidad kubay',
  },
];

const EthnicInteractiveMap: React.FC = () => {
  return (
    <MapContainer center={[1.252302645176641, -70.23357464338513]} zoom={13} style={{ height:'100%', width: '100%' }}>
      {/* OpenStreetMap Tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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