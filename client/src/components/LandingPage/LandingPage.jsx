import React from "react";
import {Link} from 'react-router-dom';

const LandingPage = () =>{
    return (
        <div>
            <h1>Kanto pokedex</h1>
            <span>PokeWard</span>
            <Link to='/home'>
                <div>
                    <button>
                        <span>Let's Go!</span>
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default LandingPage