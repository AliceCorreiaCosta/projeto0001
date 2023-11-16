import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

import './Navbar.css'

const [search, setSearch] = useState("")
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  if(!search) return 
    navigate(`/search?q=${search}`);
    setSearch("");
  
}

const Navbar = () => {
    return (
        <nav id='navbar'>
          <h2>
            <Link to="/"><BiCameraMovie/>Best Browser Games</Link>
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Busque por um Game"
            onchange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
          </form>
        </nav>
    )
}

export default Navbar;