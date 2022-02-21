import Map from "../components/Map";
import MapDetails from "../components/MapDetails";
import SettingsBar from "../components/SettingsBar";
import data from "../shapefiles/itbCirebon.json";

const MapScreen = () => {
  return (
    <div className="h-[calc(100vh_-_104px)] ">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      ></div>
      <SettingsBar
        styling={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgb(204 204 204)",
          minHeight: "40px",
          padding: "0px 12px",
          justifyContent: "center",
        }}
      ></SettingsBar>
      <div className="flex flex-row-reverse h-[100%]">
        <MapDetails
          styling={{ width: "750px", flex: "0 0 750px" }}
        ></MapDetails>
        <Map
          styling={{
            height: "100%",
            position: "relative",
            flex: "1 1 100%",
            boxShadow: "-2px 2px 5px 0 rgba(0,0,0,.4)",
            zIndex: 1,
          }}
          studyArea={data}
        ></Map>
      </div>
    </div>
  );
};

export default MapScreen;
