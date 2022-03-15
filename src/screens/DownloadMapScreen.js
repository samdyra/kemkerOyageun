import { MapContainer, TileLayer } from "react-leaflet";

const DownloadMapScreen = () => {
  return (
    <div style={{ height: "calc(100vh - 66px)" }}>
      <MapContainer
        center={[-6.664775841757377, 108.41674126660926]}
        zoom={16}
        style={{
          height: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default DownloadMapScreen;
