import { Link } from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

const GameCard = ({game, showLink = true}) => {
    return (
        <div className='game-card'>
            <img src={imageUrl + game.poster_path} alt={game.title} />
            <h2>{game.title}</h2>
            <p>
                <faStar  /> {game.vote.average}
            </p>
            {showLink && <Link to={`/game/${game.id}`}>Detalhes</Link>}
        </div>
    )
}

export default GameCard