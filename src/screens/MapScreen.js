import data from "../shapefiles/ITBJatinagor.json";
import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import noPic from "../images/no-image.jpg";

const MapScreen = () => {
  const [name, setName] = useState("");
  const [firstImage, setFirstImage] = useState("https://gdurl.com/ra7En");
  const [secondImage, setSecondImage] = useState("https://gdurl.com/ra7En");
  const [thirdImage, setThridImage] = useState("https://gdurl.com/ra7En");
  const defaultFontSize = "30px";
  const secondaryFontSize = "20px";

  const onEachPolygons = (feature, layer) => {
    const polygonName = feature.properties.Jenis_Obj;
    const firstImage = feature.properties.Foto_1;
    const secondImage = feature.properties.Foto_2;
    const thirdImage = feature.properties.Foto_2;

    function someFunc() {
      setName(polygonName);
      setFirstImage(firstImage);
      setSecondImage(secondImage);
      setThridImage(thirdImage);
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
        <div
          style={{
            width: "600px",
            flex: "0 0 600px",
            boxShadow: "-2px 2px 5px 0 rgba(0,0,0,.4)",
            zIndex: 3,
            position: "relative",
            overflowY: "scroll",
            paddingLeft: "20px",
            paddingTop: "10px",
          }}
        >
          {/* Map Title */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <text
              style={{
                fontSize: defaultFontSize,
                lineHeight: defaultFontSize * 1.3,
                fontWeight: "600",
              }}
            >
              Institut Teknologi Bandung
            </text>
            <text
              style={{
                fontSize: secondaryFontSize,
                lineHeight: secondaryFontSize * 1.3,
                fontWeight: "400",
              }}
            >
              Kampus Cirebon
            </text>
          </div>
          {/* Map Title */}
          {/* Map Images */}
          <div
            style={{
              paddingTop: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={firstImage}
              style={{ height: "400px", width: "540px", position: "relative" }}
            ></img>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={secondImage}
                style={{
                  height: "270px",
                  width: "270px",
                  position: "relative",
                }}
              ></img>
              <img
                src={thirdImage}
                style={{
                  height: "270px",
                  width: "270px",
                  position: "relative",
                }}
              ></img>
            </div>
          </div>
        </div>
        {/* Map Images */}
        {/* Maps Detail */}
        {/* Maps */}
        <MapContainer
          center={[-6.927348780149033, 107.7695420971685]}
          zoom={16}
          style={{
            height: "100%",
            position: "relative",
            flex: "1 1 100%",
            boxShadow: "-2px 3px 5px 0 rgba(0,.9,0,.4)",
            zIndex: 0,
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
