import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import { ForMakers } from './Pages/LandingPages/LandingForMakers';
import { GetHired } from './Pages/LandingPages/GetHired';
import { CreateExperience } from './Pages/LandingPages/CreateExperience';


function App() {
    return (
        <Router>
            <Route exact path="/" component={Homepage} />
            <Route path="/landing1" component={ForMakers} />
            <Route path="/landing2" component={GetHired} />
            <Route path="/landing3" component={CreateExperience} />

        </Router>
    );
}

export default App;
