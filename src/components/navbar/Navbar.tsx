import { useState } from "react";
import "./Navbar.css";
import MyButton from "../myButton/MyButton";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar navbar-expand-lg bc">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Bolt_logo.png"
            width="50"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </a>

        <div className="d-flex align-items-center ml-auto d-lg-none">
          <MyButton
            className="btn btn-success ml-2 button-color border-0 mx-3"
            style={{ width: "90px", borderRadius: "25px" }}
            title="Log in"
          />
          
          <button
            className={`border-0 navbar-toggler  ${showLinks ? "active" : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={showLinks ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleLinks}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${showLinks ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Ride
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Become a driver
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Fleet
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Business
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Scooters
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Drive
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Food
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Cities
              </a>
            </li>
          </ul>
        </div>
        <MyButton
          className="btn btn-success btn d-none d-lg-block button-color w-5 border-0 "
          style={{ width: "90px", borderRadius: "25px" }}
          title="Log in"
        />
      </div>
    </nav>
  );
};

export default Navbar;
