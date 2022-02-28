import data from "../shapefiles/itbCirebon.json";
import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const MapScreen = () => {
  const [name, setName] = useState("");
  const [layer, setLayer] = useState("");
  const onEachPolygons = (feature, layer) => {
    const borderName = feature.properties.NAME;
    const borderLayer = feature.properties.LAYER;
    function someFunc() {
      setName(borderName);
      setLayer(borderLayer);
    }
    layer.on({
      click: (event) => {
        someFunc();
      },
    });
  };
  return (
    <div className="h-[calc(100vh_-_104px)] ">
      {/* Settings Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgb(204 204 204)",
          minHeight: "40px",
          padding: "0px 12px",
          justifyContent: "center",
        }}
      ></div>
      {/* Settings Bar */}
      <div className="flex flex-row-reverse h-[100%]">
        {/* Maps Detail */}
        <div style={{ width: "600px", flex: "0 0 600px" }}>
          <text>
            {name}-{layer}
          </text>
        </div>
        {/* Maps Detail */}
        {/* Maps */}
        <MapContainer
          center={[-6.664775841757377, 108.41674126660926]}
          zoom={16}
          style={{
            height: "100%",
            position: "relative",
            flex: "1 1 100%",
            boxShadow: "-2px 3px 5px 0 rgba(0,.9,0,.4)",
            zIndex: 1,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={data} onEachFeature={onEachPolygons}></GeoJSON>
        </MapContainer>
        {/* Maps */}
      </div>
    </div>
  );
};

export default MapScreen;
