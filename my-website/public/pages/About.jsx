import React from "react";
import Header from "../componenets/Header";
import about_1 from "../../src/assets/img/about-1.jpg";
import about_2 from "../../src/assets/img/about-2.jpg";
import team1 from "../../src/assets/img/team-1.jpg";
import team2 from "../../src/assets/img/team-2.jpg";
import team3 from "../../src/assets/img/team-3.jpg";
import team4 from "../../src/assets/img/team-4.jpg";
import { NavLink } from "react-router-dom";
function About() {
  return (
    <>
      {/* <Header /> */}

      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink to={'/services'}> Services</NavLink>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Fact Start --> */}
      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 wow fadeIn" data-wow-delay=".1s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">100+</h1>
                <h5 className="text-white mt-1">
                  Success in getting happy students
                </h5>
              </div>
            </div>
            {/* <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">25</h1>
                <h5 className="text-white mt-1">
                  Thousands of successful business
                </h5>
              </div>
              </div> */}
            <div className="col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">25+</h1>
                <h5 className="text-white mt-1">
                  Projects are available to show their skills
                </h5>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay=".7s">
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
      {/* <!-- Fact End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid py-5 my-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s">
              <div className="h-100 position-relative">
                <img
                  src={about_1}
                  className="img-fluid w-75 rounded"
                  alt=""
                  style={{ marginBottom: "25%" }}
                />
                <div
                  className="position-absolute w-75"
                  style={{ top: "25%", left: "25%" }}>
                  <img
                    src={about_2}
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
                TechyCoder is committed to bridging the gap between theoretical
                knowledge and practical application, providing interns with the
                resources and support they need to excel in their chosen fields.
                With a focus on innovation and creativity, our internship
                programs foster a culture of continuous learning and
                experimentation, enabling participants to explore new
                technologies, solve complex problems, and make meaningful
                contributions to the industry
              </p>
              <p className="mb-4">
                Join us at TechyCoder and embark on a transformative journey
                where your passion for technology meets limitless possibilities.
                Whether you're interested in software development, data science,
                cybersecurity, or UI/UX design, we offer a dynamic platform for
                you to unleash your potential and shape the future of IT.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
}

export default About;
