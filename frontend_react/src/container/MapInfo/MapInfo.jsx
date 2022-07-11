import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';

import { AppWrap } from '../../wrapper/AppWrap';

import './MapInfo.scss';

import React from 'react';

const MapInfo = () => {
  return (
    <MapContainer className='leaflet-container' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  )
}

export default AppWrap(MapInfo, 'hobbies');