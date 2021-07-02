import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Productpage from "./Pages/Product-page/Product-page";
import { ForMakers } from "./Pages/LandingPages/LandingForMakers";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/landing/foodmakers" component={ForMakers} />
        <Route path="/product/:id" component={Productpage} />
      </Switch>
    </Router>
  );
}

export default App;
