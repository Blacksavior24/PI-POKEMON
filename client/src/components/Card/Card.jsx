import React from "react";
import {Link} from 'react-router-dom';

export default function Card({ name, image, types, id}) {
    return (
      <div >
        <Link to={`/pokemon/${id}`}>
          <div>
            <div >
              <img
                src={image}
                alt="img not found"
                width="200px"
                height="250px"
              />
            </div>
            <div>
              <h2>{name}</h2>
            </div>
            <div>
              {types?.map((e, k) => {
                return (
                  <div key={k}>
                    <img  />
                    <p>{e.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Link>
      </div>
    );
  }