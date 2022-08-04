import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import style from './Nav.module.css'

const Nav = ({ handleClick }) => {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div>
          <Search />
        </div>
        <div>
          <Link to="/home">
            <span className={style.title}>
              <button className={style.btn} onClick={(e) => handleClick(e)}>
                POKEWARD
              </button>
            </span>
          </Link>
        </div>
        <div>
          <Link to="/create">
            <button className={style.createBtn} >New pokemon?</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;