import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

import L from "leaflet";
import { AppWrap } from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import { MotionWrap } from "../../wrapper/MotionWrap";

import "./MapInfo.scss";
import { images } from "../../constants";

import React from "react";

function GetIcon(_iconSize, iconName) {
  return L.icon({
    iconUrl: require("../../assets/mapIcons/" + iconName + ".png"),
    iconSize: [_iconSize],
  });
}

const MapInfo = () => {
  const locations = [
    {
      name: "myCite",
      description: "My acctualy top city to live with my love :)",
      position: [52.29, 21.06],
      size: 80,
      iconName: "cite",
    },
  ];

  return (
    <div className="app__MapInfo-wrapper">
      <div className="app__MapInfo-legend"></div>
      <div className="app__MapInfo-map">
        <MapContainer
          className="leaflet-container"
          center={[52.86088, 20.20948]}
          zoom={5}
          scrollWheelZoom={false}
          
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location) => (
            <Marker
              position={location.position}
              icon={GetIcon(location.size, location.iconName)}
            >
              <Popup>
                <div 
                className="app__mapInfo-container app__flex">
                  <img
                    src={images.profile}
                    width="150"
                    height="150"
                  />
                  <h2>
                  {location.name}
                  </h2>
                  <p>
                  {location.description}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
// <div className="app__flex">
//   <img />
// </div>

export default AppWrap(MapInfo, "hobbies");
