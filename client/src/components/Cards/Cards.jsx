import React from "react";
import Card from "../Card/Card";

const Cards = ({allPokemons})=>{
    return(
        <div>
            <div >
        {allPokemons.map((e) => {
            return (
              <div key={e.id}>
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  image={e.img}
                  types={e.types}
                  attack={e.attack}
                />
              </div>
            );
          
        })}
      </div>
        </div>
    )
}

export default Cards