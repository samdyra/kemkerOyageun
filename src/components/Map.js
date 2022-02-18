import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ styling }) => {
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={styling}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};

export default Map;
