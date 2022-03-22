import React from "react";
import Header from "./Header";
import PokemonTool from "./PokemonTool";
import Footer from "./Footer";
import Nav from "./Nav";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="container text-3xl "></div>
        <PokemonTool />
        <Footer />
      </div>
    );
  }
}
export default Home;
