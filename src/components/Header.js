import React from "react";
import { NavLink } from "react-router-dom"


const Header = () => {


  return (
    <div className="py-5 text-center">
      <img alt="React-logo" style={{ height: ' 150px ' }} src={process.env.PUBLIC_URL + '/logo512.png'} />
      <h2>Keep Resources</h2>
      <p className="lead">Keep your resource at one place</p>
      <NavLink to="/" exact className="btn btn-outline-primary mr-2">Home </NavLink>
      <NavLink to="/resources/new" className="btn btn-outline-primary mr-2"> Add New Resource </NavLink>
      <NavLink to="/about" className="btn btn-outline-primary">About </NavLink>
    </div>

  )
}

export default Header; 
