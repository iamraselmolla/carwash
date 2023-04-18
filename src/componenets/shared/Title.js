import React from 'react';

const Title = ({ title }) => {
    return (
        <div className="row text-center mb-3">
            <div className="col">
                <h2 style={{textTransform: "uppercase"}} className="fw-bolder">
                   {title}

                </h2>
            </div>
        </div>
    );
};

export default Title;