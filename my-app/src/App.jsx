import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./containers/header-container/header-container";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={Homepage} />
    </Router>
  );
}

export default App;
