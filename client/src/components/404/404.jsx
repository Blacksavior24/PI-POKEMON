import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>
        <Link to="/home">
          <span >
            <button>POKEWEB</button>
          </span>
        </Link>
      </div>
      <div>
        <div>
            
            <img src={"https://www.dcode.fr/tools/pokemon-unown/images/char(69).png"} alt={"char(69)"} />
            <img src="https://www.dcode.fr/tools/pokemon-unown/images/char(82).png" alt="char(82)" />
            <img src="https://www.dcode.fr/tools/pokemon-unown/images/char(82).png" alt="char(82)" />
            <img src="https://www.dcode.fr/tools/pokemon-unown/images/char(79).png" alt="char(79)" />
            <img src="https://www.dcode.fr/tools/pokemon-unown/images/char(82).png" alt="char(82)" />


        </div>

      </div>
    </div>
  );
};

export default Error;