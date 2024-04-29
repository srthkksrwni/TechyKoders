import React from "react";
import carousel_Image1 from "../../src/assets/img/carousel-1.jpg";
import carousel_image2 from "../../src/assets/img/carousel-2.jpg";
import about_img1 from "../../src/assets/img/about-1.jpg";
import about_img2 from "../../src/assets/img/about-2.jpg";
import img1 from "../../src/assets/img/project-1.jpg";
import img2 from "../../src/assets/img/project-2.jpg";
import img3 from "../../src/assets/img/project-3.jpg";
import img4 from "../../src/assets/img/project-4.jpg";
import img5 from "../../src/assets/img/project-5.jpg";
import img6 from "../../src/assets/img/project-6.jpg";
import Services from "./Services";

function Home() {
  return (
    <>
      <>
        <div className="container-fluid px-0">
          <div
            id="carouselId"
            className="carousel slide"
            data-bs-ride="carousel">
            {/* <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="First slide"></li>
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to="1"
                aria-label="Second slide"></li>
            </ol> */}
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  src={carousel_Image1}
                  className="img-fluid"
                  alt="First slide"
                />
                <div className="carousel-caption">
                  <div className="container carousel-content">
                    <h6 className="text-secondary h4 animated fadeInUp">
                      Best Internship Opportunities
                    </h6>
                    <h1 className="text-white display-1 mb-4 animated fadeInRight">
                      An Innovative Internship Provider
                    </h1>
                    <p className="mb-4 text-white fs-5 animated fadeInDown">
                      Innovative Internship Solutions: Empowering Tomorrow's
                      Innovators to Thrive in the Ever-Evolving World of
                      Technology
                    </p>
                    <a href="/intership" className="me-2">
                      <button
                        type="button"
                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">
                        Intership Now
                      </button>
                    </a>
                    <a href="" className="ms-2">
                      <button
                        type="button"
                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">
                        Contact Us
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item">
                <img
                  src={carousel_image2}
                  className="img-fluid"
                  alt="Second slide"
                />
                <div className="carousel-caption">
                  <div className="container carousel-content">
                    <h6 className="text-secondary h4 animated fadeInUp">
                      Best IT Solutions
                    </h6>
                    <h1 className="text-white display-1 mb-4 animated fadeInLeft">
                      Quality Digital Services You Really Need!
                    </h1>
                    <p className="mb-4 text-white fs-5 animated fadeInDown">
                      Lorem ipsum dolor sit amet elit. Sed efficitur quis purus
                      ut interdum. Pellentesque aliquam dolor eget urna
                      ultricies tincidunt.
                    </p>
                    <a href="" className="me-2">
                      <button
                        type="button"
                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">
                        Read More
                      </button>
                    </a>
                    <a href="" className="ms-2">
                      <button
                        type="button"
                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">
                        Contact Us
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>

        <div className="container-fluid bg-secondary py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">99</h1>
                  <h5 className="text-white mt-1">
                    Success in getting happy customer
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">25</h1>
                  <h5 className="text-white mt-1">
                    Thousands of successful business
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">120</h1>
                  <h5 className="text-white mt-1">
                    Total clients who love HighTech
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">5</h1>
                  <h5 className="text-white mt-1">
                    Stars reviews given by satisfied clients
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 my-5">
          <div className="container pt-5">
            <div className="row g-5">
              <div
                className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".3s">
                <div className="h-100 position-relative">
                  <img
                    src={about_img1}
                    className="img-fluid w-75 rounded"
                    alt=""
                    style={{ marginBottom: "25%" }}
                  />
                  <div
                    className="position-absolute w-75"
                    style={{ top: "25%", left: "25%" }}>
                    <img
                      src={about_img2}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".5s">
                <h5 className="text-primary">About Us</h5>
                <h1 className="mb-4">
                  Explore TechyCoder's Innovative Internship Opportunities
                </h1>
                <p>
                  TechyCoder is dedicated to cultivating the next generation of
                  tech talent through immersive internship programs across
                  diverse domains. Our innovative approach blends hands-on
                  experience with cutting-edge technologies, empowering aspiring
                  professionals to thrive in the ever-evolving IT landscape.
                </p>
                <p className="mb-4">
                  At TechyCoder, we offer a collaborative environment where
                  interns have the opportunity to work on real-world projects,
                  receive mentorship from industry experts, and gain valuable
                  skills that pave the way for a successful career in
                  technology.
                </p>
                <a
                  href="/about"
                  className="btn btn-secondary rounded-pill px-5 py-3 text-white">
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <Services />

        <div className="container-fluid project py-5 mb-5">
          <div className="container">
            <div
              className="text-center mx-auto pb-5 wow fadeIn"
              data-wow-delay=".3s"
              style={{ maxWidth: "600px" }}>
              <h5 className="text-primary">Our Project</h5>
              <h1>Our Recently Completed Projects</h1>
            </div>
            <div className="row g-5">
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay=".3s">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src={{ img1 }}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Web design</h4>
                        <p className="m-0 text-white">Web Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay=".5s">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src={{ img2 }}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Cyber Security</h4>
                        <p className="m-0 text-white">Cyber Security Core</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay=".7s">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src={{ img3 }}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Mobile Info</h4>
                        <p className="m-0 text-white">Upcomming Phone</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay=".3s">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src={{ img4 }}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Web Development</h4>
                        <p className="m-0 text-white">Web Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay=".5s">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src={{ img5 }}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">Digital Marketing</h4>
                        <p className="m-0 text-white">Marketing Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay=".7s">
                <div className="project-item">
                  <div className="project-img">
                    <img
                      src={{ img6 }}
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div className="project-content">
                      <a href="#" className="text-center">
                        <h4 className="text-secondary">keyword Research</h4>
                        <p className="m-0 text-white">keyword Analysis</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
