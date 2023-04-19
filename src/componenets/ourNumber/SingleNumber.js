import React from 'react';

const SingleNumber = ({number, title}) => {
    return (
        <div className="col-md-6 my-2">
            <h3 className="fw-bolder fs-2">
                {number}
            </h3>
            <p className="mb-0 fw-bolder">
                {title}
            </p>
        </div>
    );
};

export default SingleNumber;