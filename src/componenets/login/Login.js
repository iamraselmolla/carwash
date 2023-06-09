import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaGoogle} from "react-icons/fa"

const Login = () => {
    const [itemUploading, setItemUploading] = useState();
    const [loginError, setLoginError] = useState()
    return (
        <section className='py-5 text-center'>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 shadow shadow-lg pb-4 offset-md-3">
                        <div className="px-4 theme_border py-5 rounded">
                            <h1 className="fw-bolder mb-3">
                                Login
                            </h1>
                            <Form className='text-start'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" className='rounded-5' placeholder="example@gmail.com" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" className='rounded-5' type="password" placeholder="Password" />
                                </Form.Group>
                                <button className={`${itemUploading ? 'd-none' : 'd-block'} theme_bg w-100 outline-0 border-0 px-5 py-2 fw-bolder text-white rounded`}>
                                    Login
                                </button>
                                <button className={`btn w-100 btn-primary ${itemUploading ? 'd-block' : 'd-none'}`} type="button" disabled>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Please Wait...
                                </button>
                                {loginError && <p className='text-danger fw-bolder'>{loginError}</p>}
                            </Form>

                            <div className="login-with-google">
                                <h4 className="mt-3 fw-bolder">
                                    Sign in using
                                </h4>
                                <button className='theme_bg w-100 outline-0 border-0 px-5 py-2 fw-bolder text-white rounded'><FaGoogle></FaGoogle> Google</button>


                            </div>
                            <div className="d-flex mt-2 justify-content-between">
                                <Link className='text-decoration-none theme_color fw-bolder' to="/forget-password">Forget Password?</Link>
                                <span className='text-white fw-bolder'>
                                    New Here?
                                    <Link className='text-decoration-none theme_color fw-bolder' to="/register"> Register!</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;