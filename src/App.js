import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerList from "./Components/BeerList";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    // Fetch beers data
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((response) => {
        setBeers(response.data);
        setFilteredBeers(response.data);
      })
      .catch((error) => console.error("Error fetching beers:", error));
  }, []);

  const handleSearch = (searchTerm) => {
    const results = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(results);
  };

  return (
    <div>
      <h1>Beer Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default App;
