
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import GameCard from "../componentsGameCard";

const searchURL = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

import "./GameGrid.css";

const Search = () => {
   const [searchParams] = useSearchParams();

   const [games, setGames] = useState([]);
   const query = searchParams.get("q");

   const [topGames, setTopGames] = useState([])

   const getSearchedGames = async (url) => {
     const res = await fetch(url);
     const data = await res.json();

     console.log(data);

   };

   useEffect(() => {

     const searchWithQueryURL = `${searchUrl}${apiKey}&query=${query}`;

     getSearchedGames(searchWithQueryURL);
   }, [query])


    return (
    <div className="container">
        <h2 className="title">Resultados: <span className="query-text">{query}</span></h2>
        <div className="games-container">
          {topGames.length === 0 && <p>Carregando...</p>}
          {topGames.length > 0 && topGames.map((game) => <GameCard key={game.id} game={game}/>)}
        </div>
      </div>
    );  
};

export default Search;