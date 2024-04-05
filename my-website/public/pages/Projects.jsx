import React from "react";
import Header from "../componenets/Header";
import product1 from "../../src/assets/img/project-1.jpg"
import product2 from "../../src/assets/img/project-2.jpg"
import product3 from "../../src/assets/img/project-3.jpg"
import product4 from "../../src/assets/img/project-4.jpg"
import product5 from "../../src/assets/img/project-5.jpg"
import product6 from "../../src/assets/img/project-6.jpg"
function Projects()
{  
    return(
       <>
            {/* <Header/> */}
            {/* <!-- Project Start --> */}
        <div classNameName="container-fluid project py-5 my-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Project</h5>
                    <h1>Our Recently Completed Projects</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src={product1} className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Web design</h4>
                                        <p className="m-0 text-white">Web Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src={product2} className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Cyber Security</h4>
                                        <p className="m-0 text-white">Cyber Security Core</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src={product3} className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Mobile Info</h4>
                                        <p className="m-0 text-white">Upcomming Phone</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src={product4} className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Web Development</h4>
                                        <p className="m-0 text-white">Web Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src={product5} className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <a href="#" className="text-center">
                                        <h4 className="text-secondary">Digital Marketing</h4>
                                        <p className="m-0 text-white">Marketing Analysis</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-img">
                                <img src={product6} className="img-fluid w-100 rounded" alt=""/>
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
        {/* <!-- Project End --> */}

       </> 
    )
}

export default Projects;