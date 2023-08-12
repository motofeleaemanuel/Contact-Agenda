import { HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Home />
    </HashRouter>
  );
}

export default App;
