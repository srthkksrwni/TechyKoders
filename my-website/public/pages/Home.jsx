import React from "react";
import Header from "../componenets/Header";
import carousel_Image1 from "../../src/assets/img/carousel-1.jpg"
import carousel_image2 from "../../src/assets/img/carousel-2.jpg"
import about_img1 from "../../src/assets/img/about-1.jpg"
import about_img2 from "../../src/assets/img/about-2.jpg"
import img1 from "../../src/assets/img/project-1.jpg"
import img2 from "../../src/assets/img/project-2.jpg"
import img3 from "../../src/assets/img/project-3.jpg"
import img4 from "../../src/assets/img/project-4.jpg"
import img5 from "../../src/assets/img/project-5.jpg"
import img6 from "../../src/assets/img/project-6.jpg"
import Footer from "../componenets/Footer";

function Home() {
    return (
        <>
            <Header />
            <>
                <div className="container-fluid px-0">
                    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src={carousel_Image1} className="img-fluid" alt="First slide" />
                                <div className="carousel-caption">
                                    <div className="container carousel-content">
                                        <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                        <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                                        <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                        <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel_image2} className="img-fluid" alt="Second slide" />
                                <div className="carousel-caption">
                                    <div className="container carousel-content">
                                        <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                        <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                                        <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                        <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="container-fluid bg-secondary py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                                <div class="d-flex counter">
                                    <h1 class="me-3 text-primary counter-value">99</h1>
                                    <h5 class="text-white mt-1">Success in getting happy customer</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                                <div class="d-flex counter">
                                    <h1 class="me-3 text-primary counter-value">25</h1>
                                    <h5 class="text-white mt-1">Thousands of successful business</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                                <div class="d-flex counter">
                                    <h1 class="me-3 text-primary counter-value">120</h1>
                                    <h5 class="text-white mt-1">Total clients who love HighTech</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                                <div class="d-flex counter">
                                    <h1 class="me-3 text-primary counter-value">5</h1>
                                    <h5 class="text-white mt-1">Stars reviews given by satisfied clients</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid py-5 my-5">
                    <div class="container pt-5">
                        <div class="row g-5">
                            <div class="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                                <div class="h-100 position-relative">
                                    <img src={about_img1} class="img-fluid w-75 rounded" alt="" style={{ marginBottom: "25%" }} />
                                    <div class="position-absolute w-75" style={{ top: "25%", left: "25%" }}>
                                        <img src={about_img2} class="img-fluid w-100 rounded" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                                <h5 class="text-primary">About Us</h5>
                                <h1 class="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                                <p class="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                                <a href="" class="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid services py-5 mb-5">
                    <div class="container">
                        <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "600px" }}>
                            <h5 class="text-primary">Our Services</h5>
                            <h1>Services Built Specifically For Your Business</h1>
                        </div>
                        <div class="row g-5 services-inner">
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                                <div class="services-item bg-light">
                                    <div class="p-4 text-center services-content">
                                        <div class="services-content-icon">
                                            <i class="fa fa-code fa-7x mb-4 text-primary"></i>
                                            <h4 class="mb-3">Web Design</h4>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                            <a href="" class="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                                <div class="services-item bg-light">
                                    <div class="p-4 text-center services-content">
                                        <div class="services-content-icon">
                                            <i class="fa fa-file-code fa-7x mb-4 text-primary"></i>
                                            <h4 class="mb-3">Web Development</h4>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                            <a href="" class="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                                <div class="services-item bg-light">
                                    <div class="p-4 text-center services-content">
                                        <div class="services-content-icon">
                                            <i class="fa fa-external-link-alt fa-7x mb-4 text-primary"></i>
                                            <h4 class="mb-3">UI/UX Design</h4>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                            <a href="" class="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                                <div class="services-item bg-light">
                                    <div class="p-4 text-center services-content">
                                        <div class="services-content-icon">
                                            <i class="fas fa-user-secret fa-7x mb-4 text-primary"></i>
                                            <h4 class="mb-3">Web Cecurity</h4>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                            <a href="" class="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                                <div class="services-item bg-light">
                                    <div class="p-4 text-center services-content">
                                        <div class="services-content-icon">
                                            <i class="fa fa-envelope-open fa-7x mb-4 text-primary"></i>
                                            <h4 class="mb-3">Digital Marketing</h4>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                            <a href="" class="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                                <div class="services-item bg-light">
                                    <div class="p-4 text-center services-content">
                                        <div class="services-content-icon">
                                            <i class="fas fa-laptop fa-7x mb-4 text-primary"></i>
                                            <h4 class="mb-3">Programming</h4>
                                            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                            <a href="" class="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid project py-5 mb-5">
                    <div class="container">
                        <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                            <h5 class="text-primary">Our Project</h5>
                            <h1>Our Recently Completed Projects</h1>
                        </div>
                        <div class="row g-5">
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                                <div class="project-item">
                                    <div class="project-img">
                                        <img src={{img1}} class="img-fluid w-100 rounded" alt=""/>
                                            <div class="project-content">
                                                <a href="#" class="text-center">
                                                    <h4 class="text-secondary">Web design</h4>
                                                    <p class="m-0 text-white">Web Analysis</p>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                                <div class="project-item">
                                    <div class="project-img">
                                        <img src={{img2}} class="img-fluid w-100 rounded" alt=""/>
                                            <div class="project-content">
                                                <a href="#" class="text-center">
                                                    <h4 class="text-secondary">Cyber Security</h4>
                                                    <p class="m-0 text-white">Cyber Security Core</p>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                                <div class="project-item">
                                    <div class="project-img">
                                        <img src={{img3}} class="img-fluid w-100 rounded" alt=""/>
                                            <div class="project-content">
                                                <a href="#" class="text-center">
                                                    <h4 class="text-secondary">Mobile Info</h4>
                                                    <p class="m-0 text-white">Upcomming Phone</p>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                                <div class="project-item">
                                    <div class="project-img">
                                        <img src={{img4}} class="img-fluid w-100 rounded" alt=""/>
                                            <div class="project-content">
                                                <a href="#" class="text-center">
                                                    <h4 class="text-secondary">Web Development</h4>
                                                    <p class="m-0 text-white">Web Analysis</p>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                                <div class="project-item">
                                    <div class="project-img">
                                        <img src={{img5}} class="img-fluid w-100 rounded" alt=""/>
                                            <div class="project-content">
                                                <a href="#" class="text-center">
                                                    <h4 class="text-secondary">Digital Marketing</h4>
                                                    <p class="m-0 text-white">Marketing Analysis</p>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                                <div class="project-item">
                                    <div class="project-img">
                                        <img src={{img6}} class="img-fluid w-100 rounded" alt=""/>
                                            <div class="project-content">
                                                <a href="#" class="text-center">
                                                    <h4 class="text-secondary">keyword Research</h4>
                                                    <p class="m-0 text-white">keyword Analysis</p>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Footer />
        </>
    )
}

export default Home;