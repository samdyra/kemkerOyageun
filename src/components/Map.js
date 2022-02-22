import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const Map = ({ styling, studyArea }) => {
  const [state, setState] = useState("");
  console.log(state);

  const onEachPolygons = (feature, layer) => {
    const borderWidth = feature.properties.NAME;
    console.log(feature);
    console.log(layer);
    layer.bindPopup(borderWidth);
  };
  return (
    <>
      <MapContainer
        center={[-6.664775841757377, 108.41674126660926]}
        zoom={16}
        style={styling}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={studyArea} onEachFeature={onEachPolygons}></GeoJSON>
      </MapContainer>
      <text>{state}</text>
    </>
  );
};

export default Map;
