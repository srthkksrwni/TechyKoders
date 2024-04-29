import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <NavLink to={"/"} className="navbar-brand">
              <h1 className="text-white fw-bold d-block">
                Techy<span className="text-secondary">Koders</span>{" "}
              </h1>
            </NavLink>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-transparent"
              id="navbarCollapse">
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <NavLink
                  to={"/"}
                  exact
                  className="nav-item nav-link"
                  activeClassName="active">
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className="nav-item nav-link"
                  activeClassName="active">
                  About
                </NavLink>
                <NavLink
                  to={"/services"}
                  className="nav-item nav-link"
                  activeClassName="active">
                  Services
                </NavLink>

                <NavLink
                  to={"/contact"}
                  className="nav-item nav-link"
                  activeClassName="active">
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4">
                <a href="" className="position-relative animated tada infinite">
                  <i className="fa fa-phone-alt text-white fa-2x"></i>
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: "20px" }}>
                    <span>
                      <i className="fa fa-comment-dots text-secondary"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary">Call: + 916394852594</span>
              </div>
              <div className="d-flex align-items-center justify-content-center ms-4 ">
                <a href="#">
                  <i className="bi bi-search text-white fa-2x"></i>{" "}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            <Link href={"/"} className="navbar-brand">
              <h1 className="text-white fw-bold d-block">
                Techy<span className="text-secondary">Koder</span>{" "}
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse bg-transparent"
              id="navbarCollapse">
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <NavLink
                  to={"/"}
                  exact
                  className="nav-item nav-link"
                  activeClassName="active">
                  Home
                </NavLink>
                <NavLink
                  to={"/Intership"}
                  className="nav-item nav-link"
                  activeClassName="active">
                  Intership
                </NavLink>
                <NavLink
                  to={"/about"}
                  className="nav-item nav-link"
                  activeClassName="active">
                  About
                </NavLink>
                {/* <NavLink
                  to={"/projects"}
                  className="nav-item nav-link"
                  activeClassName="active">
                  Projects
                </NavLink> */}
                <NavLink
                  to={"/contact"}
                  className="nav-item nav-link"
                  activeClassName="active">
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shirink-0">
              <div
                id="phone-tada"
                className="d-flex align-items-center justify-content-center me-4">
                <a
                  href="whatsapp://send?phone=91 8840969586"
                  className="position-relative animated tada infinite">
                  <i className="fa fa-phone-alt text-white fa-2x"></i>
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: "20px" }}>
                    <span>
                      <i className="fa fa-comment-dots text-secondary"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div className="d-flex flex-column pe-4 border-end">
                <span className="text-white-50">Have any questions?</span>
                <span className="text-secondary">Call: +91 8840969586</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
