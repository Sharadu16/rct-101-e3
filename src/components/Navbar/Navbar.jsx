import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
    const {authorized, Login, Logout} = useContext(AuthContext)
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={() => {
         if(authorized){
            Logout();
         }
         else{
            Login("U", "P")
         }
      }}>{authorized ? "Login" : "Logout"}</button>
    </div>
  );
};

export default Navbar;
