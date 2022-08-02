import React from "react";
import { useDispatch } from "react-redux";
import {
  filterCreated,
  sortPokemons,
  setCurrentPage,
} from "../../redux/actions";
import FilterTypes from "./FilterTypes";
import style from "./Filter.module.css";

const Filters = ({ setRefreshState }) => {
  const dispatch = useDispatch();

  const handlerFilterOrigin = (e) => {
    dispatch(filterCreated(e.target.value));
    dispatch(setCurrentPage(0));
    setRefreshState((prevState) => !prevState);
  };

  const handlerSort = (e) => {
    e.preventDefault();
    dispatch(sortPokemons(e.target.value));
    dispatch(setCurrentPage(0));
    setRefreshState((prevState) => !prevState);
  };

  return (
    <div>
      <div>
        <FilterTypes
          setCurrentPage={setCurrentPage}
          setRefreshState={setRefreshState}
        />
      </div>
      <div className={style.container}>
        <div>
          <button
            onClick={(e) => handlerSort(e)}
            value="a-z"
            className={style.bn54}
          >
            A-Z
          </button>
        </div>
        <div>
          <button
            onClick={(e) => handlerSort(e)}
            value="z-a"
            className={style.bn54}
          >
            Z-A
          </button>
        </div>
        <div>
          <button
            onClick={(e) => handlerFilterOrigin(e)}
            value="FromApi"
            className={style.bn54}
          >
            API
          </button>
        </div>
        <div>
          <button
            onClick={(e) => handlerFilterOrigin(e)}
            value="All"
            className={style.bn54}
          >
            ALL
          </button>
        </div>
        <div>
          <button
            onClick={(e) => handlerFilterOrigin(e)}
            value="FromDb"
            className={style.bn54}
          >
            DATA BASE
          </button>
        </div>
        <div>
          <button
            onClick={(e) => handlerSort(e)}
            value="strong"
            className={style.bn54}
          >
            STRONG
          </button>
        </div>
        <div>
          <button
            onClick={(e) => handlerSort(e)}
            value="weak"
            className={style.bn54}
          >
            WEAK
          </button>
        </div>
      </div>
    </div>
  );
};
export default Filters;