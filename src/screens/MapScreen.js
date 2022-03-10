import data from "../shapefiles/ITBJatinagor.json";
import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "../imageSlider.css";
import baseMaps from "../shapefiles/baseMaps.json";
import itb from "../images/ITB.png";
import github from "../images/github.png";
import insta from "../images/instgrm.png";
import twttr from "../images/twttr.png";
import gd19 from "../images/logoGD19.png";
import img from "../images/logoIMG.jpg";

const MapScreen = () => {
  const [name, setName] = useState("");
  const [firstImage, setFirstImage] = useState("https://gdurl.com/ra7En");
  const [secondImage, setSecondImage] = useState("https://gdurl.com/ra7En");
  const [thirdImage, setThridImage] = useState("https://gdurl.com/ra7En");
  const [basemapNormal, setBasemapNormal] = useState({
    attribution: baseMaps[1].attribution,
    url: baseMaps[1].url,
  });
  // console.table(basemapNormal);

  const defaultFontSize = "24px";
  const secondaryFontSize = "20px";

  const onEachPolygons = (feature, layer) => {
    const polygonName = feature.properties.OBJECTID;
    const firstImage = feature.properties.Foto_1;
    const secondImage = feature.properties.Foto_2;
    const thirdImage = feature.properties.Foto_3;

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
            width: "540px",
            flex: "0 0 540px",
            boxShadow: "-2px 2px 5px 0 rgba(0,0,0,.4)",
            zIndex: 3,
            position: "relative",
            overflowY: "scroll",
            paddingLeft: "25px",
            paddingTop: "15px",
          }}
        >
          {/* Map Title */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <text
              style={{
                fontSize: defaultFontSize,
                lineHeight: defaultFontSize * 1.3,
                fontWeight: "550",
              }}
            >
              PETA INSTITUT TEKNOLOGI BANDUNG
            </text>
            <text
              style={{
                fontSize: secondaryFontSize,
                lineHeight: secondaryFontSize * 1.3,
                fontWeight: "400",
              }}
            >
              1 : 25000
            </text>
            <text
              style={{
                fontSize: secondaryFontSize,
                lineHeight: secondaryFontSize * 1.3,
                fontWeight: "550",
              }}
            >
              KAMPUS CIREBON
            </text>
          </div>
          {/* Map Title */}
          {/* Map Images */}
          <div className="imageContainer">
            <div className="slider">
              <div className="slides">
                {/* Radio buttons */}
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                {/* Radio buttons */}
                {/* Slide Images */}
                <div className="slide first">
                  <img src={firstImage}></img>
                </div>
                <div className="slide">
                  <img src={secondImage}></img>
                </div>
                <div className="slide">
                  <img src={thirdImage}></img>
                </div>
                {/* Slide Images */}
              </div>
              {/* Manual Navigation */}
              <div className="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
              </div>
              {/* Manual Navigation */}
            </div>
          </div>
          {/* Map Images */}
          {/* Keterangan Start */}
          <div className="keterangan-container">
            <div className="wrapper">
              <div className="keterangan-title">
                <h1>KETERANGAN</h1>
              </div>
              <div className="keterangan-content">
                <div className="keterangan-judul">
                  <p>Objek ID</p>
                  <p>Keterangan Objek</p>
                  <p>Luas Area</p>
                  <p>Koordinat X</p>
                  <p>Koordinat Y</p>
                  <p>Foto 1</p>
                  <p>Foto 2</p>
                  <p>Foto 3</p>
                </div>
                <div className="keterangan-data">
                  <div>67</div>
                  <div>Bangunan A</div>
                  <div>678 ha</div>
                  <div>-6.927348780149033</div>
                  <div>107.7695420971685</div>
                  <div>https://gdurl.com/yoY7a</div>
                  <div>https://gdurl.com/yoY7a</div>
                  <div>https://gdurl.com/yoY7a</div>
                </div>
              </div>
            </div>
          </div>
          {/* Keterangan End */}
          {/* Penerbit Start */}
          <div className="penerbit-container">
            <img src={itb}></img>
            <div className="penerbit-text-container">
              <h1>DIBUAT DAN DITERBITKAN OLEH:</h1>
              <p>
                Teknik Geodesi dan Geomatika ITB Jl. Ganesa No.10, Lb.
                Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
              </p>
            </div>
          </div>
          {/* Penerbit End */}
          {/* Legenda Start */}
          <div className="legend-container">
            <div className="legend-title">
              <h1>LEGENDA</h1>
            </div>
            <div className="wrapper-legend">
              <div className="legend-content">
                <div className="legend-text">
                  <p>Bangunan</p>
                  <p>Sawah</p>
                  <p>Irigasi</p>
                  <p>Trek Lari</p>
                  <p>Gerbang Depan</p>
                  <p>Danau</p>
                  <p>Lahan Kosong</p>
                  <p>Perkebunan</p>
                </div>
                <div className="legend-symbol">
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                </div>
              </div>
              <div className="legend-content">
                <div className="legend-text">
                  <p>Tugu ITB</p>
                  <p>Jalan</p>
                  <p>Trotoar</p>
                  <p>Gardu Listrik</p>
                  <p>Lapangan Basket</p>
                  <p>Hutan</p>
                  <p>Sungai</p>
                  <p>Rumah Warga</p>
                </div>
                <div className="legend-symbol">
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                </div>
              </div>
            </div>
          </div>
          {/* Legenda End */}
          {/* Koordinat Referensi start */}
          <div className="reference-container">
            <div className="reference-title">
              <h1>KOORDINAT REFERENSI</h1>
            </div>
            <div className="reference-wrapper">
              <div className="reference">
                <p>Coordinate System </p>
                <p>Projection</p>
                <p>Datum Horizontal</p>
                <p>Datum Vertikal</p>
                <p>Satuan Tinggi</p>
                <p>Selang Kontur</p>
              </div>
              <div className="titik-dua">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="reference-data">
                <p>WGS 1984</p>
                <p>Transverse Mercator</p>
                <p>WGS84</p>
                <p>DGN95</p>
                <p>Meter</p>
                <p>12,5 Meter</p>
              </div>
            </div>
          </div>
          {/* Koordinat Referensi end */}
          {/* Footer Start */}
          <div className="footer-container">
            <div className="soc-info-gdobrak-container">
              <div className="gdobrak">
                <img src={img}></img>
                <img src={gd19}></img>
              </div>
              <div className="soc-container">
                <p>Reach us!</p>
                <div className="soc-icon">
                  <img src={twttr}></img>
                  <img src={insta}></img>
                  <img src={github}></img>
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright © 2022 Tim Kemah Kerja 2019. All rights reserved.</p>
            </div>
          </div>
          {/* Footer End */}
        </div>
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
            attribution={basemapNormal.attribution}
            url={basemapNormal.url}
          />
          <GeoJSON data={data} onEachFeature={onEachPolygons}></GeoJSON>
        </MapContainer>
        {/* Maps */}
      </div>
    </div>
  );
};

export default MapScreen;
