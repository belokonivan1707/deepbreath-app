import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Home-page";
import {ForMakers} from './Pages/LandingPage/LandingForMakers';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/landing" component={ForMakers} />
    </Router>
  );
}

export default App;
