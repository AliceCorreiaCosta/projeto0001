import {useState, useEffect} from "react";

import './GameGrid.css'

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
//const pegarJogos = import.meta.env.VITE_API_PEGAR_JOGOS;


const Home = () => {
   const [topGames, setTopGames] = useState([])

   const getTopRatedGames = async (url) => {
     const res = await fetch(url);
     const data = await res.json();

     console.log(data);

   };

   useEffect(() => {

     const topRatedUrl = `${gamesURL}top_rated?${apiKey}`;

     getTopRatedGames(topRatedUrl);

   }, [])

    return (
      <div className="container">
        <h2 className="title">Melhores Jogos:</h2>
        <div className="games-container">
          {topGames.length === 0 && <p>Carregando...</p>}
          {topGames.length > 0 && topGames.map((game) => <GameCard key={game.id} game={game}/>)}
        </div>
      </div>
    );

export default Home;