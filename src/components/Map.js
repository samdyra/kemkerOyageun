import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import data from "../shapefiles/itbCirebon.json";

const Map = ({ styling }) => {
  return (
    <>
      <MapContainer
        center={[-6.664775841757377, 108.41674126660926]}
        zoom={18}
        style={styling}
        data={data}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={data}></GeoJSON>
      </MapContainer>
    </>
  );
};

export default Map;
