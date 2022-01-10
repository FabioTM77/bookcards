import React from "react";

import { GiAndroidMask } from "react-icons/gi";
import { GiAlienBug } from "react-icons/gi";
import { GiAlienStare } from "react-icons/gi";

const Header = () => {
    
  return (
    <React.Fragment>
      <header>
        <h1>
          <GiAlienBug />
          <br />
          <GiAndroidMask />
          <GiAlienStare />
        </h1>

        <h1>Search for your favorite book or science fiction author:</h1>
        <br/>
      </header>
    </React.Fragment>
  );
};

export default Header;
