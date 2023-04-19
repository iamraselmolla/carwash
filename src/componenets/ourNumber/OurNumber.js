import React from 'react';
import SingleNumber from './SingleNumber';
import Title from '../shared/Title';

const OurNumber = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Title title="OUR NUMBER"></Title>
                        <div className="row text-center">
                            <SingleNumber number="50+" title="Trained Staffs"></SingleNumber>
                            <SingleNumber number="25" title="Branches"></SingleNumber>
                            <SingleNumber number="1300+" title="Satisfied Clients"></SingleNumber>
                            <SingleNumber number="10000+" title="Work Done"></SingleNumber>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
    );
};

export default OurNumber;