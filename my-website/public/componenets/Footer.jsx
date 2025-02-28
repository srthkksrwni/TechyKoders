import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container-fluid footer bg-dark wow fadeIn"
        data-wow-delay=".3s">
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <a href="index.html">
                <h1 className="text-white fw-bold d-block">
                  Techy<span className="text-secondary">Koder</span>{" "}
                </h1>
              </a>
              <p className="mt-4 text-light">
                Innovative Internship Solutions: Empowering Tomorrow's
                Innovators to Thrive in the Ever-Evolving World of Technology
              </p>
              <div className="d-flex hightech-link">
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-2">
                  <i className="fab fa-facebook-f text-primary"></i>
                </a>
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-2">
                  <i className="fab fa-twitter text-primary"></i>
                </a>
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-2">
                  <i className="fab fa-instagram text-primary"></i>
                </a>
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in text-primary"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <span href="#" className="h3 text-secondary">
                Short Link
              </span>
              <div className="mt-4 d-flex flex-column short-link">
                <a href="/about" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  About us
                </a>
                <a href="/contact" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Contact us
                </a>
                <a href="/Intership" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Intership
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#" className="h3 text-secondary">
                Help Link
              </a>
              <div className="mt-4 d-flex flex-column help-link">
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Terms Of use
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Privacy Policy
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Helps
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>FQAs
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Contact
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#" className="h3 text-secondary">
                Contact Us
              </a>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <a
                  href="#"
                  className="pb-3 text-light border-bottom border-primary">
                  <i className="fas fa-map-marker-alt text-secondary me-2"></i>{" "}
                  Allahabad
                </a>
                <a
                  href="#"
                  className="py-3 text-light border-bottom border-primary">
                  <i className="fas fa-phone-alt text-secondary me-2"></i>{" "}
                  8840969586
                </a>
                <a
                  href="#"
                  className="py-3 text-light border-bottom border-primary">
                  <i className="fas fa-envelope text-secondary me-2"></i>{" "}
                  techykoders@gmail.com
                </a>
              </div>
            </div>
          </div>
          <hr className="text-light mt-5 mb-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span className="text-light">
                <a href="#" className="text-secondary">
                  <i className="fas fa-copyright text-secondary me-2"></i>
                  TechyKoder
                </a>
                , All right reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
