import "./styling/App.scss";
import "./styling/animation.js";

import PokemonTool from "./components/PokemonTool";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import Collectie from "./components/Collectie";
import Nav from "./components/Nav";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/body" element={<Body />} />
          <Route path="/collectie" element={<Collectie />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
