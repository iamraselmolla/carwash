import React from 'react';

const Banner = () => {
    return (
        <>
            <section className="banner d-flex py-5" style={{ backgroundImage: "url(img/banner.jpg)", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h3 style={{ fontSize: "40px" }}>
                                'Tired' of all these
                            </h3>
                            <h1 style={{ color: "rgb(0, 139, 211)", fontSize: "80px", fontWeight: "900" }}>
                                Cleaning?

                            </h1>
                            <p>
                                The Best Car Washing service around. Get your
                                appoinment now and enjoy the service.
                            </p>
                            <div className="d-flex gap-3 ">
                                <button type="button" className="border-0 rounded px-5 py-3 me-2 fw-bolder text-white theme_bg">Book Now</button>
                                <button type="button" className="border-0 rounded px-5 py-3 me-2 fw-bolder text-white theme_bg">Get Appoinment</button>
                           

                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>
            <div className="container" style={{ marginTop: "-70px" }}>
                <div className="row ">
                    <div className="d-flex justify-content-between">
                        <div className="icon ">
                            <div className="icon_box  bg-white text-center">
                                <div>
                                    <img src="img/icon11.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="icon">
                            <div className="icon_box  bg-white text-center" style={{ borderColor: "#008bd3" }}>
                                <div>
                                    <img src="img/icon12.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="icon">
                            <div className="icon_box  bg-white text-center" style={{ borderColor: "#fe4365" }}>
                                <div>
                                    <img src="img/icon13.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="icon">
                            <div className="icon_box  bg-white text-center" style={{ borderColor: "#74bb20" }}>
                                <div>
                                    <img src="img/icon14.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;