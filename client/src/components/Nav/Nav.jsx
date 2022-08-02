import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";


const Nav = ({ handleClick }) => {
  return (
    <div >
      <nav >
        <div>
          <Search />
        </div>
        <div>
          <Link to="/home">
            <span >
              <button  onClick={(e) => handleClick(e)}>
                KANTO POKEDEX
              </button>
            </span>
          </Link>
        </div>
        <div>
          <Link to="/create">
            <button >Create a pokemon</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;