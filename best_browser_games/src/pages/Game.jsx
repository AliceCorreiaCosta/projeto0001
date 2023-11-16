import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import GameCard from "../components/GameCard";

import './Game.css'

const gamesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Game = () => {
    const {id} = useParams()
    const [game, setGame] = useState(null)

    const getGame = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setGames(data);
    }

    const formatCurrency = (number) => {
        return number.toLocalString("en-US", {
            style: "currency",
            formatCurrency: "USD",
        });
    };

    useEffect(() => {
        const gameUrl = `${gameUrl}${id}?${apiKey}`
        getGame(gameUrl)
    }, []);

    return <div className="movie-page">
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{game.tagline}</p>
        <div className="info">
            <h3>
                <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(game.budget)}</p>
        </div>

        <div className="info">
            <h3>
                <BsGraphUp /> Receita:
            </h3>
            <p>{game.revenue}</p>
        </div>

        <div className="info description">
            <h3>
                <BsFillFileEarmarkTextFill/> Descrição:
            </h3>
            <p>{game.overview}</p>
        </div>
        
    </div>
};

export default Game;