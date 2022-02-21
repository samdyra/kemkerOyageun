import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const Map = ({ styling, studyArea }) => {
  return (
    <>
      <MapContainer
        center={[-6.664775841757377, 108.41674126660926]}
        zoom={17}
        style={styling}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={studyArea}></GeoJSON>
      </MapContainer>
    </>
  );
};

export default Map;
