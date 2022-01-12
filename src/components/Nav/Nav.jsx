import React from "react";
import './nav.scss';
import {NavLink} from "react-router-dom";


const Nav = () => {
  return (
    <>
      <NavLink className="link" to='/'>main</NavLink>
      <NavLink className="link" to='/users'>users</NavLink>
      <NavLink className="link" to='/posts'>posts</NavLink>
    </>
  );
}

export default Nav;
