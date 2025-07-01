import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineKey } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiTwotoneTrophy } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand">BUGATTI</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page"><AiTwotoneHome /> Home /</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><AiOutlineSearch /> Quienes somos /</Link>
            </li>
            <li className="nav-item">
              <Link to="/history" className="nav-link"><AiTwotoneTrophy /> Historia</Link>
            </li>
            <li className="nav-item-login">
              <Link to="/login" className="nav-link"><AiOutlineKey /> Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
