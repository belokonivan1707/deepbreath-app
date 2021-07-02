import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import { ForMakers } from './Pages/LandingPages/LandingForMakers';
import { GetHired } from './Pages/LandingPages/GetHired';
import { CreateExperience } from './Pages/LandingPages/CreateExperience';
import { CreateShop } from './Pages/LandingPages/CreateShop';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/landing/foodmakers" component={ForMakers} />
        <Route path="/landing/createprofile" component={GetHired} />
        <Route path="/landing/createexperience" component={CreateExperience} />
        <Route path="/landing/createshop" component={CreateShop} />
      </Switch>
    </Router>
  );
}

export default App;
