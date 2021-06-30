import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import { ForMakers } from './Pages/LandingPages/LandingForMakers';

function App() {
    return (
        <Router>
            <Route exact path="/" component={Homepage} />
            <Route path="/landing" component={ForMakers} />
        </Router>
    );
}

export default App;
