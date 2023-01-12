import React from "react";
import NavBar from "../navBar/NavBar";
import cvpic from "../../assets/cvpic.png";
import AboutMe from "../aboutMe/AboutMe";
import Button from "../../UI/Button";
import Portfolio from "../portfolio/Portfolio";
import 'animate.css';
import Tecnologias from "../tecnologias/Tecnologias";


const Home = () => {
  function handleClick(section) {
    const contactoSection = document.querySelector(`#${section}`);
    contactoSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <NavBar />
      <div className="drop-shadow-2xl text-blue-800 font-serif text-left flex flex-col sm:flex-row gap-4 px-4 mt-4 py-0 sm:h-80 sm:items-center dark:bg-white ">
        <div className="sm:w-1/2 animate__animated animate__fadeInLeft p-4 flex flex-col gap-4 dark:bg-white">
          <p className="leading-6">
            Me dedico al desarrollo de aplicaciones web modernas y atractivas
            utilizando React Js.
          </p>{" "}
          <p className="leading-6">
            {" "}
            Mi objetivo es ofrecer soluciones eficientes y dinámicas que brinden
            una buena experiencia de usuario.
          </p>{" "}
          <p className="leading-6">
            {" "}
            Estoy comprometido con la formación continua y la resolución de
            problemas concretos a través de mis habilidades en el campo de la
            programación.{" "}
          </p>
          <div className="flex justify-center gap-2 mt-4 sm:mt-10">
            <Button
              action={() => handleClick("portfolio")}
              text={"Portfolio"}
            />
            <Button action={() => handleClick("sobremi")} text={"sobre mi"} />
          </div>
        </div>
        <div className="flex justify-center px-2 sm:w-1/2 animate__animated animate__fadeInRight">
          <img className="w-48 h-40" src={cvpic} alt="" />
        </div>
      </div>
      <Portfolio />
      <AboutMe />
      <Tecnologias/>
    </>
  );
};

export default Home;
