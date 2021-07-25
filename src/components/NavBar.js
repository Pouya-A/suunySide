import React from "react";
import useWindowDimensions from "./windowSize";

const NavBar = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100 navbar-dark bg-tranparent position-absolute p-2 px-5 navBAR">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            sunnyside
          </a>
          <button
            className="navbar-toggler border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse d-lg-flex justify-content-end container navBAR-content ${
              width <= 992 ? "bg-light w-100 mt-5" : null
            }`}
            id="navbarNav"
          >
            <span className="tri"></span>
            <ul className="navbar-nav py-3 mx-4">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
            </ul>
            <a
              className="nav-link btn rounded-pill bg-light text-dark button px-4"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Contacts
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
