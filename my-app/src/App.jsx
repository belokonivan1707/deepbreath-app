import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Home-page';
import { Dropdown } from './components/dropdown/dropdown';

function App() {
    return (
        <Router>
            <Route path="/" component={Homepage} />
            <Dropdown />
        </Router>
    );
}

export default App;
