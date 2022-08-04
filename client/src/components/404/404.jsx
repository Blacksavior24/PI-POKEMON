import React from "react";
import { Link } from "react-router-dom";
import style from './Error.module.css'

const Error = () => {
  return (
    <div className={style.container}>
      <center>
      <div style={{paddingTop: '15%'}} >
        <Link to="/home">
          <span >
            <button className={style.boton}>POKEWARD</button>
          </span>
        </Link>
      </div>
      <div className={style.container} style={{paddingTop: "5%" }}>
        
            
            <img style={{width: "150px"}} src={"https://www.dcode.fr/tools/pokemon-unown/images/char(69).png"} alt={"char(69)"} />
            <img style={{width: "150px"}} src="https://www.dcode.fr/tools/pokemon-unown/images/char(82).png" alt="char(82)" />
            <img style={{width: "150px"}} src="https://www.dcode.fr/tools/pokemon-unown/images/char(82).png" alt="char(82)" />
            <img style={{width: "150px"}} src="https://www.dcode.fr/tools/pokemon-unown/images/char(79).png" alt="char(79)" />
            <img style={{width: "150px"}} src="https://www.dcode.fr/tools/pokemon-unown/images/char(82).png" alt="char(82)" />

      </div>
      </center>
    </div>
  );
};

export default Error;