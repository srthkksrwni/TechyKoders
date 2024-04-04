import React from "react";
import Header from "../componenets/Header";
import product1 from "../../src/assets/img/about-1.jpg"
import product1 from "../../src/assets/img/about-2.jpg"
import product1 from "../../src/assets/img/team-1.jpg" 
import product1 from "../../src/assets/img/team-2.jpg" 
import product1 from "../../src/assets/img/team-3.jpg" 
import product1 from "../../src/assets/img/team-4.jpg" 
function About() {
    return (
        <>
            <Header />

            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Fact Start --> */}
            <div className="container-fluid bg-secondary py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">99</h1>
                                <h5 className="text-white mt-1">Success in getting happy customer</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">25</h1>
                                <h5 className="text-white mt-1">Thousands of successful business</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">120</h1>
                                <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">5</h1>
                                <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
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
                        <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="h-100 position-relative">
                                <img src={about-1} className="img-fluid w-75 rounded" alt="" style="margin-bottom: 25%;"/>
                                    <div className="position-absolute w-75" style={{top: "25%",left: "25%"}}>
                                        <img src={about-2} className="img-fluid w-100 rounded" alt=""/>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                            <h5 className="text-primary">About Us</h5>
                            <h1 className="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                            <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                            <a href="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Team Start --> */}
            <div className="container-fluid pb-5 mb-5 team">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style="max-width: 600px;">
                        <h5 className="text-primary">Our Team</h5>
                        <h1>Meet our expert Team</h1>
                    </div>
                    <div className="owl-carousel team-carousel wow fadeIn" data-wow-delay=".5s">
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src={team-1} className="img-fluid w-100 rounded-circle" alt=""/>
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src={team-2} className="img-fluid w-100 rounded-circle" alt=""/>
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src={team-3} className="img-fluid w-100 rounded-circle" alt=""/>
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded team-item">
                            <div className="team-content">
                                <div className="team-img-icon">
                                    <div className="team-img rounded-circle">
                                        <img src={team-4} className="img-fluid w-100 rounded-circle" alt=""/>
                                    </div>
                                    <div className="team-name text-center py-3">
                                        <h4 className="">Full Name</h4>
                                        <p className="m-0">Designation</p>
                                    </div>
                                    <div className="team-icon d-flex justify-content-center pb-4">
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}

        </>
    )
}

export default About;