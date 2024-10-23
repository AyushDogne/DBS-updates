import React from 'react'
import '../Style/App.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from "gsap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaBeer } from 'react-icons/fa';

import { motion } from "framer-motion"
// import * as motion from "framer-motion/client"

// import '../Style/App2.css'


const Footer = () => {
  return (
    // <div class="body">
    //     <div class='nk-wrap'>
        <footer class="nk-footer">
            <section class="section section-sm section-footer">
                <div class="container container-xxl">
                    <div class="row">
                        <div class="col-lg-3 me-auto order-lg-first">
                            <div class="wgs wgs-text animated" data-animate="fadeInUp" data-delay=".1">
                                <div class="wgs-body">
                                    <a href="https://ai.debugshala.com/" class="wgs-logo">
                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/logo_dark.png" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/logo_dark.png" alt="logo"/>
                                    </a>
                                    <p>Yukti, fueled by Debugshala, blends AI prowess and coding expertise for personalized career guidance and instant code generation. </p>
                                    <ul class="d-flex gaps gx-3">
                                        <li><a class="link-dark" target="_blank" href="https://www.facebook.com/debugshala/"><em class="fab fa-facebook-f"></em></a></li>
                                        <li><a class="link-dark" target="_blank"  href="https://www.twitter.com/debugshala/"><em class="fab fa-twitter"></em></a></li>
                                        <li><a class="link-dark" target="_blank" href="https://www.instagram.com/debugshala/"><em class="fab fa-instagram"></em></a></li>
                                        <li><a class="link-dark" target="_blank"  href="https://www.linkedin.com/company/debugshala/"><em class="fab fa-linkedin-in"></em></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-6">
                            <div class="wgs wgs-menu animated" data-animate="fadeInUp" data-delay=".2">
                                <h5 class="pb-2">Get Started</h5>
                                <div class="wgs-body">
                                    <ul class="wgs-links wgs-links-s6">
                                        
                                        {/* <li><a href="#learnWithYukti">Learn with युkti</a></li>
                                        <li><a href="#chatWithYukti">Chat with युkti</a></li>
                                        <li><a href="#codeWithYukti">Code with युkti</a></li>
                                        <li><a href="#careerWithYukti">Career with युkti</a></li> */}
                                       
                                        <li><a href="https://ai.debugshala.com/signup" target="_blank">Learn with युkti</a></li>
                                        <li><a href="https://ai.debugshala.com/signup" target="_blank">Chat with युkti</a></li>
                                        <li><a href="https://ai.debugshala.com/signup" target="_blank">Code with युkti</a></li>
                                        <li><a href="https://thedatacareer.com/" target="_blank">Career with युkti</a></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-6">
                            <div class="wgs wgs-menu animated" data-animate="fadeInUp" data-delay=".3">
                                <h5 class="mb-2">Courses</h5>
                                <div class="wgs-body">
                                    <ul class="wgs-links wgs-links-s6">
                                        <li><a href="https://datascience.debugshala.com/" target="_blank">Data Science</a></li>
                                        <li><a href="https://datascience.debugshala.com/" target="_blank" >Data Engineering</a></li>
                                        <li><a href="https://mern.debugshala.com/" target="_blank">MERN Stack</a></li>
                                        <li><a href="https://java.debugshala.com/" target="_blank">Java Web Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-6">
                            <div class="wgs wgs-menu animated" data-animate="fadeInUp" data-delay=".4">
                                <h5 class="mb-2">Company</h5>
                                <div class="wgs-body">
                                    <ul class="wgs-links wgs-links-s6">
                                        <li><a href="https://debugshala.com/about-us" target="_blank">About Us</a></li>
                                        <li><a href="https://debugshala.com/login" target="_blank">Build your Career</a></li>
                                        <li><a href="https://debugshala.com/blogs" target="_blank">Blogs</a></li>
                                        <li><a href="https://debugshala.com/contact-us" target="_blank">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 col-6">
                            <div class="wgs wgs-menu animated" data-animate="fadeInUp" data-delay=".5">
                                <h5 class="mb-2">Contact Info</h5>
                                <div class="wgs-body">
                                    <ul class="wgs-links wgs-links-s6">
                                        <li><a  href="https://www.google.com/maps/place/C.S+Naidu+Arcade/@22.7251737,75.8879134,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd37c88e376b:0x583f6123c954467f!8m2!3d22.7251688!4d75.8904883!16s%2Fg%2F11cn9br0kz?entry=ttu" target="_blank">204,C.S Naidu Arcade, Greater Kailash Road, Opposite Grotto,, Indore, Madhya Pradesh 452001, India</a></li>
                                        <li><a href="tel:+918982385539" target="_blank" >+91 8982385539</a></li>
                                        <li><a href="mailto:debugshala@gmail.com" target="_blank">debugshala@gmail.com</a></li>
                                        <li><a href="#">Chat support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="border-top"/>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <p>Copyright © 2023 <a href="https://www.debugshala.com/" target="_blank">DebugShala</a></p>
                        <ul class="footer-links footer-links-s2">
                            <li>All Rights Reserved</li>
                            <li><a href="https://www.debugshala.com/privacy-policy" target="_blank">Terms and Conditions</a></li>
                            <li><a href="https://www.debugshala.com/privacy-policy" target="_blank">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    // </div>
    // </div>
  )
}

export default Footer
   