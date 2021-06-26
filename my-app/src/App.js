import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Home-page";

function App() {
  return (
    <Router>
      <h1>test tag hungry hugger</h1>
      <Route path="/" component={Homepage} />
    </Router>
  );
}

export default App;
