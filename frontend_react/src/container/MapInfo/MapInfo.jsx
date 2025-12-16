import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";
import { AppWrap } from "../../wrapper/AppWrap";

import { motion } from "framer-motion";

import { images } from "../../constants";
import "./MapInfo.scss";

function GetIcon(_iconSize, iconName, imagesName) {
  return L.icon({
    iconUrl: require("../../assets/mapIcons/" + iconName + ".png"),
    iconSize: [_iconSize],
  });
}

const MapInfo = () => {
  const locations = [
    {
      name: "Home",
      description: "My acctualy top city to live with my love :)",
      position: [52.29, 21.06],
      size: 40,
      iconName: "cite",
      imageUrl: images.wawsketch,
    },
    {
      name: "Speech in Wroclaw Univercity of Technology",
      description:
        "Speech about architecutre from east Ukraine with Polish history. Some about polish-ukrainian social problem before WW2. In the room was ~80 person.",
      position: [51.386582818975995, 16.692584877544427],
      size: 20,
      iconName: "Speech",
      imageUrl: images.wroA01,
    },
    {
      name: "Speech in Poznań",
      description: "Speech about architecture in eastern borderlands.",
      position: [52.4, 16.91],
      size: 30,
      iconName: "Speech",
      imageUrl: images.poznan,
    },
    {
      name: "Speech in Lublin",
      description: "Speech about east architecture before WW2",
      position: [51.24, 22.53],
      size: 30,
      iconName: "Speech",
      imageUrl: images.lublin,
    },
    {
      name: "One of speech in senior house",
      description: "Speech about east architecture with person who lived there",
      position: [50.980944888620186, 17.700273712729487],
      size: 20,
      iconName: "Speech",
      imageUrl: images.wroSenior,
    },
    {
      name: "One of speech in Evangelical Habsburg Church",
      description: "Speech about east architecture with person who lived there",
      position: [51.10546599408575, 17.066005378051706],
      size: 20,
      iconName: "Speech",
      imageUrl: images.wroSenior2,
    },
    {
      name: "Sketch",
      description: "Sketch in old and beautyfull village in Croatia.",
      position: [43.374752216024866, 16.604519025450525],
      size: 10,
      iconName: "sketch",
      imageUrl: images.brac02,
    },
    {
      name: "Sketch",
      description: "Sketch city center in Lozisca.",
      position: [43.34854459310235, 16.48326139355626],
      size: 10,
      iconName: "sketch",
      imageUrl: images.brac01,
    },
    {
      name: "Sketch",
      description: "My sketchbooks can travel alone :)",
      position: [41.48500423068813, 2.470840530642692],
      size: 40,
      iconName: "sketch",
      imageUrl: images.barcelona,
    },
    {
      name: "Sketch",
      description: "Castle in Janowiec, between Warsaw and Lublin",
      position: [51.32415559328278, 21.889985449128783],
      size: 20,
      iconName: "sketch",
      imageUrl: images.janowiec,
    },
    {
      name: "Sketch",
      description: "Split old town",
      position: [43.514605108152374, 16.445649403178063],
      size: 10,
      iconName: "sketch",
      imageUrl: images.split,
    },
    {
      name: "Sketch",
      description: "night Rome sketch",
      position: [41.89165043833179, 12.493416674522402],
      size: 30,
      iconName: "sketch",
      imageUrl: images.rome,
    },
    {
      name: "Sketch",
      description:
        "my one of the best city - Lviv. Sketch made in Baczewski restaurant",
      position: [49.830874177927114, 24.01360592332347],
      size: 50,
      iconName: "sketch",
      imageUrl: images.baczewski,
    },
    {
      name: "Sketch",
      description: "beautyfull church in small city in Belarus",
      position: [53.13760924225776, 26.03208772493313],
      size: 30,
      iconName: "sketch",
      imageUrl: images.belarus01,
    },
    {
      name: "Sketch",
      description: "Adam Mickiewicz house",
      position: [53.60097444515767, 25.84069095135167],
      size: 20,
      iconName: "sketch",
      imageUrl: images.belarus02,
    },
    {
      name: "Sketch",
      description: "the national bank of Poland before WW2",
      position: [52.09612663424824, 23.769866725047955],
      size: 30,
      iconName: "sketch",
      imageUrl: images.bank01,
    },
    {
      name: "Sketch",
      description: "a copy 1:1 of the Łazienki Królewskie in Warsaw",
      position: [54.13396880539976, 25.75438382479027],
      size: 30,
      iconName: "sketch",
      imageUrl: images.belarus03,
    },
    {
      name: "Sketch",
      description: "Krakow tenements :)",
      position: [50.0625014525146, 19.976067758295706],
      size: 30,
      iconName: "sketch",
      imageUrl: images.krk,
    },
    {
      name: "Sketch",
      description: "The Devil's Bridge",
      position: [51.55450851174656, 14.560958309766663],
      size: 30,
      iconName: "sketch",
      imageUrl: images.german,
    },
    {
      name: "Sketch",
      description: "Arctic Catedral in Tromso, Norway",
      position: [69.6480572438085, 18.98768216000089],
      size: 30,
      iconName: "sketch",
      imageUrl: images.tromso,
    },
  ];

  return (
    <div className="app__MapInfo-wrapper">
      <h2 className="head-text " style={{ marginBottom: 20 }}>
        About my hobbies
      </h2>
      <motion.div
        whileInView={{ x: [-500, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="app__MapInfo-map">
          <MapContainer
            className="leaflet-container"
            center={[52.86088, 20.20948]}
            zoom={5}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=ZlAX2267wcS358pcO51B"
            />
            {locations.map((location) => (
              <Marker
                position={location.position}
                icon={GetIcon(location.size, location.iconName)}
              >
                <Popup>
                  <div className="app__mapInfo-container app__flex">
                    <h2>{location.name}</h2>
                    <p>{location.description}</p>
                    <motion.a
                      className="img-size"
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                      }}
                      whileHover={{ scale: 3 }}
                    >
                      <div>
                        <a className="app__MapInfo-imgWrapper">
                          <img
                            src={location.imageUrl}
                            width="150"
                            height="150"
                          />
                        </a>
                      </div>
                    </motion.a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
};
// <div className="app__flex">
//   <img />
// </div>

export default AppWrap(MapInfo, "hobbies");
