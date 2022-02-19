import MapScreen from "./screens/MapScreen";
import AboutScreen from "./screens/AboutScreen";
import DownloadMapScreen from "./screens/DownloadMapScreen";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <MapScreen></MapScreen>
        </Route>
        <Route exact path="/AboutScreen">
          <AboutScreen></AboutScreen>
        </Route>
        <Route exact path="/DownloadMapScreen">
          <DownloadMapScreen></DownloadMapScreen>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
