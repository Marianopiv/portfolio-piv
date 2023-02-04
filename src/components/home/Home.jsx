import React from "react";
import NavBar from "../navBar/NavBar";
import cvpic from "../../assets/cvpic.png";
import AboutMe from "../aboutMe/AboutMe";
import Button from "../../UI/Button";
import Portfolio from "../portfolio/Portfolio";
import "animate.css";
import Tecnologias from "../tecnologias/Tecnologias";
import "./home.css";
import ellipse14 from "../../assets/Ellipse 14.png";
import ellipse15 from "../../assets/Ellipse 15.png";
import withBg from "../../assets/black-white.png";
const Home = () => {
  function handleClick(section) {
    const contactoSection = document.querySelector(`#${section}`);
    contactoSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <NavBar />
      <div className="drop-shadow-2xl bg-black text-white font-serif text-left flex flex-col pt-4 py-0 sm:h-80 sm:items-center">
        <div className="animate__animated animate__fadeIn sm:animate__fadeInLeft py-4 px-10 sm:px-32 flex flex-col justify-center poppins ">
          <div className="flex flex-col justify-center mt-4 sm:mt-10">
            <h3 className="title text-lg font-black">Hola, soy Mariano,</h3>
            <h3 className="text-white"> desarrollador frontend</h3>
            <p className="text-xs text-gray-500 mt-2">
              Comprometido con la formación continua y la resolución de
              problemas concretos a través de mis habilidades en el campo de la
              programación.
            </p>
            <div className="h-96 z-50">
              <img className="absolute ellipse-14 rounded-full " src={ellipse14} alt=""/>
              <div className="absolute ellipse-15 rounded-full"></div>
              <img className="absolute cv border-2 border-r-cyan-400 border-l-violet-400 border-t-blue-300 border-b-blue-300" src={withBg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
      <AboutMe />
      <Tecnologias />
    </>
  );
};

export default Home;
