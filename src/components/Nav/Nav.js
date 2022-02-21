import React from 'react';
import logo from '../../assets/cover/KristenDeLaRosa.gif';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import { Link } from 'react-router-dom';

function Nav() {



  return (
    <header className="flex-row px-1">
    <nav>
    <ul className="flex-row">
    

     <div>
        <Link to="/"><img src = {logo} alt="Kristen De La Rosa Logo" height = "100px"/></Link>
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>

     </ul>

</nav>
</header>
  );
}



export default Nav;
