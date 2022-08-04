import React from "react";
import style from './Loading.module.css'
const Loading = () => {
  return (
    <div className={style.container}>
    <div className={style.div}>
      <center>
      <img
        src="https://c.tenor.com/a2tshkHR6RsAAAAi/run-pikachu.gif"
        alt="loading..."
        className={style.img}
      />
      </center>
    </div>
    </div>
  );
};

export default Loading;