import Map from "../components/Map";
import NavBar from "../components/NavBar";
import MapDetails from "../components/MapDetails";

const MapScreen = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="h-[calc(100vh_-_64px)] flex flex-row-reverse ">
        <MapDetails
          styling={{ width: "750px", flex: "0 0 750px" }}
        ></MapDetails>
        <Map
          styling={{ height: "100%", position: "relative", flex: "1 1 100%" }}
        ></Map>
      </div>
    </div>
  );
};

export default MapScreen;
