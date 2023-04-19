import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [itemUploading, setItemUploading] = useState();

    return (
        <section className='py-5 text-center'>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 shadow-lg offset-md-3">
                        <div className="px-4 theme_border py-5 rounded">
                            <h1 className="fw-bolder mb-3">
                                Register Now!
                            </h1>
                            <Form className='text-start'>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail2">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control required name="fullname" type="text" className='rounded-5' placeholder="Full Name" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName2">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required name="email" type="email" className='rounded-5' placeholder="example@gmail.com" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName2">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control required name="phone" type="number" className='rounded-5' placeholder="8801944835365" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required name="password" className='rounded-5' type="password" placeholder="Password" />
                                </Form.Group>

                                <button className={`theme_bg outline-0 border-0 px-5 py-2 w-100 fw-bolder text-white rounded ${itemUploading ? 'd-none' : 'd-block'}`}>
                                    Register
                                </button>
                                <button className={`btn w-100 btn-primary ${itemUploading ? 'd-block' : 'd-none'}`} type="button" disabled>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Registering...
                                </button>

                                {/* {error && <p className='text-danger fw-bold'>{error}</p>} */}

                            </Form>
                            <div className="d-flex mt-2">
                                Already Registered? <Link className='text-decoration-none ms-2 theme_color fw-bolder' to="/login">Login</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;