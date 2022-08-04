import React from "react";
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css';

const LandingPage = () =>{
    return (
        <div className={style.landing}>
            <div className={style.cont}>
                <h1 className={style.h1}><center>Welcome ^-^</center></h1>
                <p className={style.parra}><center>PokeWard</center> </p>
                <Link to='/home'>
                    <center>
                        <button className={style.boton}>
                            <span className={style.span}>Let's Go!</span>
                        </button>
                    </center>
                </Link>
                <h2 className={style.h2}><center>Application designed by:</center></h2>
                <a href="https://www.linkedin.com/in/emerson-edward-villalta-quispe-1b09a01aa/" className={style.a  } > 
                 <center>Emerson Villalta</center></a>
            </div>
        </div>
    )
}

export default LandingPage