// SeafarerHistoryMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SeafarerHistoryMap: React.FC = () => {
  return (
    <div className="w-[80%] max-w-full h-[500px] sm:h-[600px]">
      <MapContainer
        center={[1.2976, 103.7767]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"  
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[1.2976, 103.7767]}>
          <Popup>National University of Singapore, our home.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SeafarerHistoryMap;
