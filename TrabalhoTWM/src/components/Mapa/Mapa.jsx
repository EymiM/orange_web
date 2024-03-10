import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importe os estilos do Leaflet
import L from 'leaflet';
import customIconUrl from './icon_local.png';

export const Mapa = ({ eventos }) => {
  // Configurações do ícone personalizado
  const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [50, 50], // Tamanho do ícone
    iconAnchor: [25, 50], // Ponto de ancoragem do ícone
    popupAnchor: [0, -40], // Ponto de ancoragem do popup
  });

  const mapCenter = [-18.9183, -48.2733]; // Coordenadas de Uberlândia, MG

  return (
    <div className="map-container">
      <MapContainer center={mapCenter} zoom={14} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {eventos && eventos.map((evento, index) => (
          <Marker key={index} position={[evento?.lat || 0, evento?.lng || 0]} icon={customIcon}>
            <Popup>{evento?.titulo}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};