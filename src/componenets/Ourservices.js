import React from 'react';
import Title from './shared/Title';

const Ourservices = () => {
    const servicesArr = ["OPTI COAT", "CAR DETAILING", "CAR WASHING", "ECO FRIENDLY", "EXTERIOR CLEANING", "WHEEL ALIGN"]
    return (
        <>
            <section className="py-5">
                <div className="container mt-5">
                    <Title title=" OUR SERVICES"></Title>
                    <div className="row">
                        {servicesArr?.map((services, index) => {
                            return <>
                                <div key={index} style={{padding: "70px 0"}} className={`col-md-4 ${(index+1)%2 === 0 ? "bg-black" : 'bg-black bg-opacity-50'} bg-dark text-center`}>
                                    <img src={`img/icon-image${index+1}.png`} alt="" />
                                    <p className="fw-bolder mt-4 text-white">
                                        {services}
                                    </p>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ourservices;