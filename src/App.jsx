import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Productpage from "./Pages/Product-page/Product-page";
import FoodmakerPage from "./Pages/Foodmaker-page/Foodmaker-page";
import ProductExplorePage from "./Pages/Productsexplore-page/Productexplore-page";
import FoodmakersExplorePage from "./Pages/FoodmakersExplore-page/FoodmakersExplorePage";
import { ForMakers } from "./Pages/LandingPages/LandingForMakers";
import { GetHired } from "./Pages/LandingPages/GetHired";
import { CreateExperience } from "./Pages/LandingPages/CreateExperience";
import { CreateShop } from "./Pages/LandingPages/CreateShop";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/:id" component={FoodmakerPage} />
        <Route exact path="/product/:id" component={Productpage} />
        <Route exact path="/test/product_explore" component={ProductExplorePage} />
        <Route exact path="/test/foodmakers_explore" component={FoodmakersExplorePage} />
        <Route path="/landing/foodmakers" component={ForMakers} />
        <Route path="/landing/createprofile" component={GetHired} />
        <Route path="/landing/createexperience" component={CreateExperience} />
        <Route path="/landing/createshop" component={CreateShop} />
      </Switch>
    </Router>
  );
}

export default App;
