import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Style/App.css'
import { gsap } from "gsap";
import { motion } from "framer-motion"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import Collapses from './Collapses';

const MainBody = () => {
    return (
        <div class="body">
        <div class='nk-wrap'>
            <main className="nk-pages">
                {/* <div className="section bg-light section-sm">
                    <div className="container container-xxl">
                        <ul className="d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-xl-between gaps gy-4 gx-6 py-4">
                            <li className="animated" data-animate="fadeInUp" data-delay=".1">
                                <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/32-a.png" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/64-a.png 2x" alt="partner" />
                            </li>
                            <li className="animated" data-animate="fadeInUp" data-delay=".15">
                                <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/32-b.png" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/64-b.png 2x" alt="partner" />
                            </li>
                            <li className="animated" data-animate="fadeInUp" data-delay=".2">
                                <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/32-c.png" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/64-c.png 2x" alt="partner" />
                            </li>
                            <li className="animated" data-animate="fadeInUp" data-delay=".25">
                                <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/32-d.png" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/64-d.png 2x" alt="partner" />
                            </li>
                            <li className="animated" data-animate="fadeInUp" data-delay=".3">
                                <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/32-e.png" srcset="https://ai.debugshala.com/templates/classic-theme/assets/images/partners/64-e.png 2x" alt="partner" />
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div id="learnWithYukti" class="section section-m bg-white pb-0 ov-h">
                    <div class="container container-xxl">
                        <div class="section-head">
                            <div class="row justify-content-between">
                                <div class="col-lg-5">
                                    <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".1">Learn Anything</h6>
                                    <h2 class="title title-semibold animated" data-animate="fadeInUp" data-delay=".5">Empowering Your Career Journey!</h2>
                                    <p class="mb-0 mt-n2 d-lg-none animated" data-animate="fadeInUp" data-delay=".6">Learn with Yukti Career Assistant is your dedicated partner on the journey to career success. Whether you're exploring new skills, preparing for interviews, or seeking expert guidance, Yukti is here to empower you. Get ready to elevate your career prospects, one step at a time, with personalized learning and actionable insights. With Yukti, your career goals are within reach.</p>
                                </div>
                                <div class="col-lg-6 d-none d-lg-block animated" data-animate="fadeInUp" data-delay=".8">
                                    <p class="pt-4">Learn with Yukti Career Assistant is your dedicated partner on the journey to career success. Whether you're exploring new skills, preparing for interviews, or seeking expert guidance, Yukti is here to empower you. Get ready to elevate your career prospects, one step at a time, with personalized learning and actionable insights. With Yukti, your career goals are within reach.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <marquee behavior="alternate" direction="left" Scrollamount="10">
                        <div class="has-marquee d-flex justify-content-center" id="marque-one">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data science mein kaun-kaun si industries mein jobs milti hain?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Front-ent me kon si technologies use hoti hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Kaise MERN Stack Developer bane?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data scientist banne ke liye konsi skills acquire karni chahiye?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Java me College projects kese banaye?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Apne web projects and technologies ko kaise strong karein?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Machine learning me konsi technology use hoti hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data Visulaization me kon-kon se tools aate hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Requirement gathering kya hota hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">PowerBI me Analysis kese kare?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Framework or library me kya difference hota h?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data Scientist banne ke liye kya qualification chahiye?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Java Developer ki starting salary kya hoti hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Machine learning aur deep learning mein kya antar hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data scientist banne ke liye konsi skills acquire karni chahiye?</h6>
                            </div>
                        </div>
                    </marquee>

                    <marquee behavior="alternate" direction="right" Scrollamount="10">
                        <div class="has-marquee d-flex justify-content-center mt-4" id="marque-two">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">As an fresher resume mein kya mention karna chahiye?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Resume kaise format me banaye?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data science mein internships kaise milte hain?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">"Career Objective" section mein kya likhna chahiye?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Kya main apne resume mein apna CGPA mention karu?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data science projects ke liye kaise portfolio taiyar kiya ja sakta hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Apne skills aur achievements ko kaise highlight kare?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Kya mujhe apne extracurricular activities mention karna chahiye?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data science field mein growth opportunities kya hai ?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">As an Fresher me apna resume kaise alag bana sakta hu?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Apne web projects or technologies ko kaise showcase karien?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data analysis ke liye kaunsi programming languages important hai?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Git ko resume me kaise mention karien?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Front-end or back-end development skills ko resume me kaise highlight karein?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">Data science mein kaun-kaun si industries mein jobs milti hain?</h6>
                            </div>
                            <div class="bg-light d-flex flex-shrink-0 align-items-center p-2 mx-2 rounded-pill">
                                <img class="h-36px w-36px rounded-circle" src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/question.png" alt="" />
                                <h6 class="text-base ms-1 px-2">ReactJs developer ka resume kese banaye?</h6>
                            </div>
                        </div>
                    </marquee>
                </div>

                <section id="chatWithYukti" class="section bg-white">
                    <div class="container">

                        <div class="nk-block nk-block-lg nk-block-features-s2">
                            <div class="row align-items-center flex-row-reverse gutter-vr-30px">
                                <div class="col-md-6">
                                    <div class="gfx animated" data-animate="fadeInUp" data-delay=".1">
                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/chat.png" alt="gfx" />
                                    </div>
                                </div>
                                <div class="col-md-6">

                                    <div class="nk-block-text">
                                        <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".2">Ask Anything (Personal Assistant)</h6>
                                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".3">Chat with युkti</h2>
                                        <p class="animated" data-animate="fadeInUp" data-delay=".4">युkti use artificial intelligence to understand and respond to your questions and conversations. युkti this feature are really helpful because they can give you instant and personalized help.</p>
                                        <p class="animated" data-animate="fadeInUp" data-delay=".5">युkti offer a diverse range of specialized topics across various fields.
                                            Eg. Interview Guide, Personal Mentor, Career Mentor, Programming Expert, DataScience Expert etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nk-block nk-block-lg nk-block-features-s2">
                            <div id="codeWithYukti" class="row align-items-center gutter-vr-30px">
                                <div class="col-md-6">
                                    <div class="gfx animated" data-animate="fadeInUp" data-delay=".1">
                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/code.png" alt="gfx" />
                                    </div>
                                </div>
                                <div class="col-md-6">

                                    <div class="nk-block-text">
                                        <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".2">Personal Developer</h6>
                                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".3">Code with युkti</h2>
                                        <p class="animated" data-animate="fadeInUp" data-delay=".4">युkti has completely changed the game for beginners when it comes to writing code. With its AI code generator, beginners can now create code faster and more accurately than ever before.</p>
                                        <p class="animated" data-animate="fadeInUp" data-delay=".5">This exciting technology has made coding easier and more enjoyable, allowing developers to bring their ideas to life quickly and with precision. युkti is here to make coding fun and efficient for everyone!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="nk-block nk-block-features-s2">
                            <div id="careerWithYukti" class="row align-items-center flex-row-reverse gutter-vr-30px">
                                <div class="col-md-6">
                                    <div class="gfx animated" data-animate="fadeInUp" data-delay=".1">
                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/career.png" alt="gfx" />
                                    </div>
                                </div>
                                <div class="col-md-6">

                                    <div class="nk-block-text">
                                        <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".2">Get Dream Job</h6>
                                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".3">Career with युkti</h2>
                                        <p class="animated" data-animate="fadeInUp" data-delay=".4">युkti has transformed the way people navigate their career journeys. With its cutting-edge career guidance platform, individuals can now access personalized advice and insights to help them make informed career choices.</p>
                                        <p class="animated" data-animate="fadeInUp" data-delay=".5">This innovative technology has made career planning more accessible and user-friendly, empowering individuals to chart their paths with confidence and clarity. युkti is here to make career guidance a seamless and enriching experience for everyone!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section bg-light" id="why">
                    <div class="background-shape bs-reverse"></div>
                    <div class="container">
                        <div class="section-head section-head-s9 wide-sm">
                            <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".1">How?</h6>
                            <h2 class="title animated" data-animate="fadeInUp" data-delay=".2">How Does it works?</h2>
                            <p class="animated" data-animate="fadeInUp" data-delay=".3">You need to follow a few simple steps to generate your content. Start with युkti  and get personalized help.</p>
                        </div>

                        <div class="nk-block">
                            <div class="row gutter-vr-40px justify-content-center">
                                <div class="col-lg-4 col-md-4">
                                    <div class="feature feature-s8 feature-s8-alt feature-center card card-full-lg card-md animated" data-animate="fadeInUp" data-delay=".4">
                                        <div class="feature-icon feature-icon-lg feature-icon-lg-s2">
                                            <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/connect.png" alt="feature" />
                                        </div>
                                        <div class="feature-text feature-text-s8">
                                            <h4 class="title title-sm title-thin title-s5"><span>Connect with युkti</span><span>Create a Account</span></h4>
                                            <p>Choose a your field related Topic. Multiple topics are available for your all needs.</p>
                                            <a href="https://ai.debugshala.com/signup" class="link link-primary link-feature-s1"><em class="link-icon icon-circle icon-circle-md ti ti-arrow-right"></em></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="feature feature-s8 feature-s8-alt feature-center card card-full-lg card-md animated" data-animate="fadeInUp" data-delay=".5">
                                        <div class="feature-icon feature-icon-lg feature-icon-lg-s2">
                                            <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/provide.png" alt="feature" />
                                        </div>
                                        <div class="feature-text feature-text-s8">
                                            <h4 class="title title-sm title-thin title-s5"><span>Provide Information </span><span>Ask what you want</span></h4>
                                            <p>Enter a detailed of your question. Tell the युkti what do you want.</p>
                                            <a href="https://ai.debugshala.com/signup" class="link link-primary link-feature-s1"><em class="link-icon icon-circle icon-circle-md ti ti-arrow-right"></em></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="feature feature-s8 feature-s8-alt feature-center card card-full-lg card-md animated" data-animate="fadeInUp" data-delay=".6">
                                        <div class="feature-icon feature-icon-lg feature-icon-lg-s2">
                                            <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/get.png" alt="feature" />
                                        </div>
                                        <div class="feature-text feature-text-s8">
                                            <h4 class="title title-sm title-thin title-s5"><span>Get Answers</span><span>More than 40+ languages</span></h4>
                                            <p>Get a unique reply of your unanswered questions. The responces are really instant.</p>
                                            <a href="https://ai.debugshala.com/signup" class="link link-primary link-feature-s1"><em class="link-icon icon-circle icon-circle-md ti ti-arrow-right"></em></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center pdt-r">
                                <ul class="btn-grp animated" data-animate="fadeInUp" data-delay=".7">
                                    <li><a href="https://ai.debugshala.com/login" target="_blank" class="btn btn-md btn-grad">Get Access Now</a></li>
                                    <li><a href="https://ai.debugshala.com/signup" target="_blank" class="btn btn-md btn-outline btn-grad on-bg-light">Connect with युkti</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- // --> */}
                <section class="sectionbg-white" id="benifits">
                    <div class="container">
                        <div class="section-head section-head-s9 wide-sm">
                            <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".1">Features</h6>
                            <h2 class="title animated" data-animate="fadeInUp" data-delay=".2">युkti key features</h2>
                            <p class="animated" data-animate="fadeInUp" data-delay=".3">Unlock Career Success with AI-Powered Guidance and Code Generation.</p>
                        </div>

                        <div class="nk-block nk-block-features">
                            <div class="row gutter-vr-60px gutter-100px">
                                <div class="col-lg-6">
                                    <div class="feature feature-s12 animated" data-animate="fadeInUp" data-delay=".4">
                                        <div class="feature-icon feature-icon-lg-s1 m-lg-0">
                                            <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/ai.png" alt="feature" />
                                        </div>
                                        <div class="feature-text feature-text-s2">
                                            <p>युkti employs advanced artificial intelligence to provide instant and personalized assistance, and offering guidance on a wide range of topics, from career advice to programming.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="feature feature-s12 animated" data-animate="fadeInUp" data-delay=".5">
                                        <div class="feature-icon feature-icon-lg-s1 m-lg-0">
                                            <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/chat1.png" alt="feature" />
                                        </div>
                                        <div class="feature-text feature-text-s2">
                                            <p>युkti offers content generation capabilities, including code generation and content templates, which can be quickly customized to meet individual needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="feature feature-s12 animated" data-animate="fadeInUp" data-delay=".6">
                                        <div class="feature-icon feature-icon-lg-s1 m-lg-0">
                                            <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/career1.png" alt="feature" />
                                        </div>
                                        <div class="feature-text feature-text-s2">
                                            <p>युkti serves as a comprehensive career guide, offering insights, interview preparation, and personalized mentoring to help users achieve their career goals. </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="feature feature-s12 animated" data-animate="fadeInUp" data-delay=".7">
                                        <div class="feature-icon feature-icon-lg-s1 m-lg-0">
                                            <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/code1.png" alt="feature" />
                                        </div>
                                        <div class="feature-text feature-text-s2">
                                            <p>युkti's AI code generator streamlines the coding process, making it faster and more accurate for developers, from beginners to experts, and enhancing the overall coding experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- // --> */}
                <section class="section bg-light" id="faqs">
                    <div class="container">
                        <div class="section-head section-head-s9 wide-md">
                            <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".1">FAQ</h6>
                            <h2 class="title animated" data-animate="fadeInUp" data-delay=".2">Frequently asked questions</h2>
                            <div class="wide-sm">
                                <p class="animated" data-animate="fadeInUp" data-delay=".3">Your Guide to Yukti's Features and Assistance.</p>
                            </div>
                        </div>

                        <div class="nk-block">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-md-12">
                                    <ul class="nav tab-nav tab-nav-btn pdb-r justify-content-start animated" data-animate="fadeInUp" data-delay=".4">
                                        <li><a class="active" data-bs-toggle="tab" href="#general-questions-13">Career Guidance</a></li>
                                        <li><a data-bs-toggle="tab" href="#ico-questions-13">Coding and Programming</a></li>
                                        <li><a data-bs-toggle="tab" href="#tokens-sales-13">Personal Assistant</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-8">
                                    <div class="tab-content animated" data-animate="fadeInUp" data-delay=".5">
                                        <div class="tab-pane fade show active" id="general-questions-13">
                                            <div class="accordion accordion-faq" id="faq-47">
                                            {/* <Collapses/> */}
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm" data-bs-toggle="collapse" data-bs-target="#faq-47-1"> What can Yukti help me with regarding my career? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-47-1" class="collapse show" data-bs-parent="#faq-47">
                                                        <div class="accordion-content">
                                                            <p>Yukti can provide guidance on career choices, resume building, job search strategies, interview preparation, and professional development.</p>
                                                        </div>
                                                    </div>
                                                </div> 
                                                 <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-47-2"> How can I get career advice from Yukti? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-47-2" class="collapse" data-bs-parent="#faq-47">
                                                        <div class="accordion-content">
                                                            <p>You can simply ask Yukti for career advice by typing or speaking your questions and concerns. It will provide tailored responses based on your queries.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-47-3"> Is the career guidance provided by Yukti personalized to my unique situation? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-47-3" class="collapse" data-bs-parent="#faq-47">
                                                        <div class="accordion-content">
                                                            <p>Yes, Yukti's responses are customized to your specific needs and circumstances, offering advice and recommendations relevant to your career goals.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-47-4"> Can Yukti help me with long-term career planning? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-47-4" class="collapse" data-bs-parent="#faq-47">
                                                        <div class="accordion-content">
                                                            <p>Yes, Yukti can assist you in creating a career roadmap and setting achievable goals for your professional growth.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                        <div class="tab-pane fade" id="ico-questions-13">
                                            <div class="accordion accordion-faq" id="faq-48">
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm" data-bs-toggle="collapse" data-bs-target="#faq-48-1"> How can Yukti assist me with coding? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-48-1" class="collapse show" data-bs-parent="#faq-48">
                                                        <div class="accordion-content">
                                                            <p>Yukti can help you with coding by providing explanations, code snippets, and debugging assistance for programming questions and challenges.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-48-2"> What programming languages and topics can Yukti assist with? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-48-2" class="collapse" data-bs-parent="#faq-48">
                                                        <div class="accordion-content">
                                                            <p>Yukti can assist with a wide range of programming languages and topics, including Python, Java, C++, web development, data science, and more.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-48-3"> Does Yukti provide ready-to-use code solutions? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-48-3" class="collapse" data-bs-parent="#faq-48">
                                                        <div class="accordion-content">
                                                            <p>Yes, Yukti can offer bug-free code snippets and solutions to common programming problems, helping you save time and learn effectively.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-48-4"> How do I ask Yukti for coding assistance? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-48-4" class="collapse" data-bs-parent="#faq-48">
                                                        <div class="accordion-content">
                                                            <p>You can ask coding-related questions by typing or speaking your queries. Yukti will provide code examples, explanations, and guidance to help you understand and solve coding challenges.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tokens-sales-13">
                                            <div class="accordion accordion-faq" id="faq-49">
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm" data-bs-toggle="collapse" data-bs-target="#faq-49-1"> What personal assistance can Yukti provide?<span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-49-1" class="collapse show" data-bs-parent="#faq-49">
                                                        <div class="accordion-content">
                                                            <p>Yukti can assist with tasks such as setting reminders, managing your calendar, answering general knowledge questions, providing weather updates, and more.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-49-2"> Is Yukti available 24/7 for personal assistance?<span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-49-2" class="collapse" data-bs-parent="#faq-49">
                                                        <div class="accordion-content">
                                                            <p>Yes, Yukti is available around the clock to help with your personal queries and tasks.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-49-3"> Can Yukti provide information beyond career and coding-related topics? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-49-3" class="collapse" data-bs-parent="#faq-49">
                                                        <div class="accordion-content">
                                                            <p>Yes, Yukti can provide information on a wide range of general knowledge topics, making it a versatile personal assistant.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-item-s2 bg-white">
                                                    <h5 class="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-49-4"> Is my personal information and data safe when using Yukti? <span class="accordion-icon accordion-icon-s2"></span>
                                                    </h5>
                                                    <div id="faq-49-4" class="collapse" data-bs-parent="#faq-49">
                                                        <div class="accordion-content">
                                                            <p>Yes, Yukti is designed to prioritize user privacy and data security. It does not store or share personal information without your consent.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="nk-block-img mt-4 mt-lg-0 animated" data-animate="fadeInUp" data-delay=".6">
                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/faqs.png" alt="lungwort" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="section section-contact bg-white ov-h" id="contact">
                    <div class="container">

                        <div class="nk-block block-contact">
                            <div class="row justify-content-center gutter-vr-30px">
                                <div class="col-lg-3">
                                    <div class="section-head section-head-sm section-head-s9 text-center text-lg-start">
                                        <h6 class="title title-xs title-s1 tc-primary animated" data-animate="fadeInUp" data-delay=".1">Contact</h6>
                                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".2">Get In Touch</h2>
                                        <div class="class">
                                            <p class="animated" data-animate="fadeInUp" data-delay=".3">Any question? Reach out to us and we’ll get back to you shortly.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column justify-content-between h-100">
                                        <ul class="contact-list contact-list-s2">
                                            <li class="animated" data-animate="fadeInUp" data-delay=".4">
                                                <em class="contact-icon contact-icon-s2 fas fa-phone"></em>
                                                <div class="contact-text">
                                                    <span><a href="tel:+918982385539" target="_blank">+918982385539</a></span>
                                                </div>
                                            </li>
                                            <li class="animated" data-animate="fadeInUp" data-delay=".5">
                                                <em class="contact-icon contact-icon-s2 fas fa-envelope"></em>
                                                <div class="contact-text">
                                                    <span><a href="mailto:debugshala@gmail.com" target="_blank">debugshala@gmail.com</a></span>
                                                </div>
                                            </li>
                                            <li class="animated" data-animate="fadeInUp" data-delay=".6">
                                                <em class="contact-icon contact-icon-s2 fab fa-whatsapp" aria-hidden="true"></em>
                                                <div class="contact-text">
                                                    <span><a href="https://whatsapp.com/channel/0029VaAcxmd11ulYRKxWRp1Z" target="_blank">Join Our Community</a></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-4 offset-lg-1">
                                    <div class="gap-6x d-none d-lg-block"></div>
                                    <div class="gap-4x d-none d-lg-block"></div>
                                    <div class='alert alert-info ft-sucess'></div>
                                    <form id="contact-form-01" class="contact-form nk-form-submit" action="#" method="post">
                                        <div class="field-item field-item-s2 animated" data-animate="fadeInUp" data-delay=".7">
                                            <input name="contact-name" id="contact_name" type="text" class="input-bordered required" placeholder="Your Name" />
                                        </div>
                                        <div class="field-item field-item-s2 animated" data-animate="fadeInUp" data-delay=".8">
                                            <input name="contact-email" id="contact_email" type="email" class="input-bordered required email" placeholder="Your Email" />
                                        </div>
                                        <div class="field-item field-item-s2 animated" data-animate="fadeInUp" data-delay=".8">
                                            <input name="contact-number" id="contact_number" type="number" class="input-bordered required " placeholder="Your Phone Number" />
                                        </div>
                                        <div class="field-item field-item-s2 animated" data-animate="fadeInUp" data-delay=".9">
                                            <textarea name="contact-message" id="contact_message" class="input-bordered input-textarea required" placeholder="Your Message"></textarea>
                                        </div>
                                        <input type="text" class="d-none" name="form-anti-honeypot" value="" />
                                        <div class="row">
                                            <div class="col-sm-12 animated" data-animate="fadeInUp" data-delay="1">
                                                <button type="submit" class="btn btn-s2 btn-md btn-grad">Submit</button>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-results"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-lg-4 align-self-center">
                                    <div class="nk-block-img animated" data-animate="fadeInUp" data-delay="1.1">
                                        <img src="https://ai.debugshala.com/templates/classic-theme/assets/images/header/contact.png" alt="lungwort" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div class="modal fade" id="login-popup">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <a href="#" class="modal-close" data-bs-dismiss="modal" aria-label="Close"><em class="ti ti-close"></em></a>
                        <div class="ath-container m-0">
                            <div class="ath-body">
                                <h5 class="ath-heading title">Sign in <small class="tc-default">with your ICO Account</small></h5>
                                <form method="post" action="#">
                                    <input type="hidden" name="userlogin" value='1' />
                                    <div class="field-item">
                                        <div class="field-wrap">
                                            <input type="text" class="input-bordered" placeholder="Your Email" name="username" id="username"/>
                                        </div>
                                    </div>
                                    <div class="field-item">
                                        <div class="field-wrap">
                                            <input type="password" class="input-bordered" placeholder="Password" name="password" id="password"/>
                                        </div>
                                    </div>
                                    <div class="field-item d-flex justify-content-between align-items-center">
                                        <div class="field-item pb-0">
                                            <input class="input-checkbox" id="remember-me-100" type="checkbox"/>
                                                <label for="remember-me-100">Remember Me</label>
                                        </div>
                                        <div class="forget-link fz-6">
                                            <a href="https://ai.debugshala.com/login?fstart=1" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#reset-popup">Forgot password?</a>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary btn-block btn-md" type="submit" name="submit">Sign In</button>
                                </form>
                                <div class="sap-text"><span>Or Sign In With</span></div>
                                <ul class="row gutter-20px gutter-vr-20px">

                                </ul>
                                <div class="ath-note text-center"> Don’t have an account? <a href="https://ai.debugshala.com/signup" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#register-popup"> <strong>Sign up here</strong></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default MainBody
