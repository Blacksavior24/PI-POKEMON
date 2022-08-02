import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import style from "./Pagination.module.css";

const Pagination = ({ allPokemons }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setCurrentPage(e.target.innerHTML - 1));
  };

  return (
    <nav className={style.container}>
      <ul className={style.pagination}>
        {[...Array(Math.ceil(allPokemons / 12))].map((e, i) => (
          <li onClick={handleClick} value={i} className={style.btn} key={i}>
            {i + 1}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;