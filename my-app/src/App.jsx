import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Route path="/" component={Homepage} />
    </Router>
  );
}

export default App;
