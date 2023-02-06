import React from "react";
import NavBar from "../navBar/NavBar";
import AboutMe from "../aboutMe/AboutMe";
import Portfolio from "../portfolio/Portfolio";
import "animate.css";
import Tecnologias from "../tecnologias/Tecnologias";
import "./home.css";
import ellipse14 from "../../assets/Ellipse 14.png";
import withBg from "../../assets/black-white.png";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="drop-shadow-2xl bg-black text-white font-serif text-left flex flex-col pt-4 py-0 sm:items-center">
        <div className="animate__animated animate__fadeIn sm:animate__fadeInLeft py-4 px-10 sm:px-32 flex flex-col justify-center poppins ">
          <div className="flex flex-col justify-center sm:justify-start mt-4 sm:mt-10 sm:flex-row sm:flex-wrap">
            <div className="sm:z-20">
              <h3 className="title text-lg font-black sm:text-4xl">
                Hola, soy Mariano,
              </h3>
              <h3 className="text-white sm:text-3xl">
                {" "}
                desarrollador frontend
              </h3>
            </div>
            <p className="text-xs text-gray-500 mt-2 sm:w-2/3 ">
              Comprometido con la formación continua y la resolución de
              problemas concretos a través de mis habilidades en el campo de la
              programación.
            </p>
            <div className="h-96 sm:h-58  z-50 sm:-z-20">
              <img
                className="absolute ellipse-14 rounded-full sm:left-80 sm:top-20 "
                src={ellipse14}
                alt=""
              />
              <div className="absolute ellipse-15 rounded-full sm:left-135 sm:top-44"></div>
              <img
                className="absolute cv border-2 border-r-cyan-400 border-l-violet-400 border-t-blue-400 border-b-blue-300 sm:left-120 sm:top-10"
                src={withBg}
                alt=""
              />
              <div className="absolute top-3/4 mt-8 sm:mt-0 right-26 sm:top-2/4 sm:left-32">
                <button className="btn-class w-36 h-12 text-xs pb-8">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
        <Tecnologias />
        <AboutMe />
      <Footer />
    </>
  );
};

export default Home;
