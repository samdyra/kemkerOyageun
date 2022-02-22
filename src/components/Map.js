import { Layer } from "leaflet";
import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const Map = ({ styling, studyArea }) => {
  const [name, setName] = useState("");
  const [layer, setLayer] = useState("");
  const onEachPolygons = (feature, layer) => {
    const borderName = feature.properties.NAME;
    const borderLayer = feature.properties.LAYER;
    function someFunc() {
      setName(borderName);
      setLayer(borderLayer);
    }
    console.log(feature);
    layer.on({
      click: (event) => {
        someFunc();
      },
    });
  };
  return (
    <>
      <text>
        {name}-{layer}
      </text>
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
    </>
  );
};

export default Map;
