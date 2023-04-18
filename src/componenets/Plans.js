import React from 'react';
import Title from './shared/Title';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'

const Plans = () => {
    // const plan = 
    return (
        <section>
            <div className="container">
                <Title title="Choose Your Plan">

                </Title>
                <div className="row pt-3">
                    <div className="col-md-4  text-center price_plan">
                        <div className="shadow-lg rounded py-5 px-3 bg-dark bg-opacity-25">
                            <h5 style={{ color: "#74bb20", fontWeight: "600" }}>Basic Washing</h5>
                            <div className="price" style={{ fontSize: "64px", fontWeight: "700" }}><span>$</span>12<span
                                style={{ fontSize: "32px" }}>.99</span></div>
                            <ul className="list-unstyled package_list text-start px-3 mt-3">
                                <li> <AiOutlineCheck className='theme_color'></AiOutlineCheck>  Exterior washing</li>
                                <li><AiOutlineClose className='text-danger'></AiOutlineClose> Vacuum cleaning</li>
                                <li><AiOutlineClose className='text-danger'></AiOutlineClose> Interior wet cleaning</li>
                                <li><AiOutlineClose className='text-danger'></AiOutlineClose> Window wiping</li>
                                <li></li>
                            </ul>
                            <ul className="list-unstyled text-center">
                                <li><BiTimeFive className="theme_color"></BiTimeFive>15 min</li>
                            </ul>
                            <button className="w-100 px-3 py-3 rounded-5 border-0 text-white fw-bolder theme_bg">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4   text-center price_plan">
                        <div className="shadow-lg rounded bg-dark text-white py-5 px-3">
                            <h5 style={{ color: "#74bb20", fontWeight: "600" }}>Ultimate Washing</h5>
                            <div className="price" style={{ fontSize: "64px", fontWeight: "700" }}><span>$</span>25<span
                                style={{ fontSize: "32px" }}>.99</span></div>
                            <ul className="list-unstyled package_list text-start px-3 mt-3">
                                <li> <AiOutlineCheck className='theme_color'></AiOutlineCheck>  Exterior washing</li>
                                <li><AiOutlineClose className='theme_color'></AiOutlineClose> Vacuum cleaning</li>
                                <li><AiOutlineClose className='text-danger'></AiOutlineClose> Interior wet cleaning</li>
                                <li><AiOutlineClose className='text-danger'></AiOutlineClose> Window wiping</li>
                                <li></li>
                            </ul>
                            <ul className="list-unstyled text-center">
                                <li><BiTimeFive className="theme_color"></BiTimeFive>25 min</li>
                            </ul>
                            <button className="w-100 px-3 py-3 rounded-5 border-0 text-white fw-bolder theme_bg">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4  text-center price_plan">
                        <div className="shadow-lg rounded py-5 px-3 bg-dark bg-opacity-25">
                            <h5 style={{ color: "#74bb20", fontWeight: "600" }}>Super Washing</h5>
                            <div className="price" style={{ fontSize: "64px", fontWeight: "700" }}><span>$</span>35<span
                                style={{ fontSize: "32px" }}>.99</span></div>
                            <ul className="list-unstyled package_list text-start px-3 mt-3">
                            <li> <AiOutlineCheck className='theme_color'></AiOutlineCheck>  Exterior washing</li>
                                <li><AiOutlineClose className='theme_color'></AiOutlineClose> Vacuum cleaning</li>
                                <li><AiOutlineClose className='theme_color'></AiOutlineClose> Interior wet cleaning</li>
                                <li><AiOutlineClose className='text-danger'></AiOutlineClose> Window wiping</li>
                                <li></li>
                            </ul>
                            <ul className="list-unstyled text-center">
                                <li><BiTimeFive className="theme_color"></BiTimeFive>45 min</li>
                            </ul>
                            <button className="w-100 px-3 py-3 rounded-5 border-0 text-white fw-bolder theme_bg">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;