import React from "react";
import Header from "../componenets/Header";

function Services() {
  return (
    <>
      {/* <Header/> */}
      {/* <!-- Services Start --> */}
      <div className="container-fluid services py-5 my-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}>
            <h5 className="text-primary">Our Internship</h5>
            <h1>Internship Built Specifically For Your Carrier</h1>
          </div>
          <div className="row g-5 services-inner">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                    <h4 className="mb-3">Web Development</h4>
                    <p className="mb-4">
                      Embarking on a web development internship offers an
                      invaluable opportunity to apply theoretical knowledge in a
                      real-world setting, gaining hands-on experience in
                      building and maintaining web applications.
                    </p>
                    <a
                      href="/InternshipForm"
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i class="fab fa-python fa-7x mb-4 text-primary "></i>

                    <h4 className="mb-3">Python Development</h4>
                    <p className="mb-4">
                      Python development internships offer an immersive
                      environment to hone coding skills and explore the diverse
                      applications of Python across software development, data
                      analysis, and automation.
                    </p>
                    <a
                      href="/InternshipForm"
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i class="fab fa-java fa-7x mb-4 text-primary"></i>

                    <h4 className="mb-3">Java Develpoment</h4>
                    <p className="mb-4">
                      Java development internships offer a robust learning
                      experience, allowing interns to delve into the world of
                      enterprise-grade software solutions, mobile applications,
                      and backend systems, leveraging Java's versatility and
                      scalability
                    </p>
                    <a
                      href="/InternshipForm"
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i class="fas fa-robot fa-7x mb-4 text-primary"></i>

                    <h4 className="mb-3">AI / ML Develpoment</h4>
                    <p className="mb-4">
                      Machine learning and AI internships offer an immersive
                      journey into cutting-edge technologies, providing hands-on
                      experience in developing algorithms, models, and
                      intelligent systems.
                    </p>
                    <a
                      href="/InternshipForm"
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i class="fas fa-terminal fa-7x mb-4 text-primary"></i>

                    <h4 className="mb-3">Full Stack Development</h4>
                    <p className="mb-4">
                      Full-stack development internships provide a comprehensive
                      learning experience, allowing participants to master both
                      front-end and back-end technologies, and gain proficiency
                      in building end-to-end web applications.
                    </p>
                    <a
                      href="/InternshipForm"
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i class="fas fa-paint-brush fa-7x mb-4 text-primary"></i>
                    <i class="fas fa-mouse-pointer fa-7x mb-4 text-primary"></i>

                    <h4 className="mb-3">UI/UX Development</h4>
                    <p className="mb-4">
                      UI/UX development internships offer an immersive journey
                      into user-centric design principles, enabling participants
                      to craft intuitive interfaces and engaging experiences
                      that resonate with end users.
                    </p>
                    <a
                      href="/InternshipForm"
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}
    </>
  );
}

export default Services;
