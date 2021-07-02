import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import { ForMakers } from "./Pages/LandingPages/LandingForMakers";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/landing/foodmakers" component={ForMakers} />
      </Switch>
    </Router>
  );
}

export default App;
