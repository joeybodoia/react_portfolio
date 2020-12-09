import React from "react";

const Navbar = (props) => {
    

    return (
        <nav className="navContainer">
          <ul className="nav">
            <li>Home</li>
            <li><a href="https://github.com/joeybodoia" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/joseph-bodoia/" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.linkedin.com/in/joseph-bodoia/" target="_blank">Email</a></li>
            <li><a href="https://www.linkedin.com/in/joseph-bodoia/" target="_blank">Resumé</a></li>
          </ul>
        </nav>
    );
};

export default Navbar;