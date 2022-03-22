import { useState, useEffect, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import List from "./List";
import axios from "axios";

const Body = () => {
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const [itemID, setItemID] = useState([]);
  const [scrollValue, setScrollValue] = useState(0);
  // const [currentName, setCurrentName] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  useEffect(() => {
    const fetchItems = () => {
      setLoading(true);
      let cancel;
      axios
        .get(currentPage, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((Response) => {
          setLoading(false);
          console.log(`I got a request for`);
          const data = Response.data.results;

          data.forEach(function (value) {
            fetchData(value);
            // console.log(value);
          });

          setNextPage(Response.data.next);
          setPrevPage(Response.data.previous);
          return () => cancel();
        });
    };
    fetchItems();
  }, [currentPage]);

  function fetchData(pokemon) {
    let url = pokemon.url; // <--- this is saving the pokemon url to a variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        // setItemID([pokeData]);
        setItemID((currentList) => [...currentList, pokeData]);
        console.log(pokeData);

        console.log(itemID);
      });
  }

  function gotoNextPage() {
    setCurrentPage(nextPage);
  }
  function gotoPrevPage() {
    setCurrentPage(prevPage);
  }

  if (loading) return "loading...";
  return (
    <div>
      <Nav />
      <Header />
      <div className="container">
        <p id="database"></p>
        <h2>{scrollValue}</h2>
      </div>
      <div>
        <div className="flex-grid">
          {itemID.map((item) => (
            <List
              name={item.name}
              id={item.id}
              img={item.sprites.front_default}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className="list-button">
        {gotoPrevPage && (
          <button onClick={prevPage ? gotoPrevPage : null}>Previous</button>
        )}
        {gotoNextPage && (
          <button
            className="next-button"
            onClick={nextPage ? gotoNextPage : null}
          >
            Next
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Body;
