import React from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      title: "Proyecto 1: My Blog",
      description:
        "Conocimientos adquiridos sobre el stack de desarrollo de JavaScript para la creación de aplicaciones web.",
      link: "https://github.com/ivanhez/proyectoweb",
    },
    {
      title: "Laboratorio React",
      description: "Práctica de creación de páginas con framework React.",
      link: "https://github.com/ivanhez/web-lab6",
    },
    {
      title: "Laboratorio JS",
      description: "Práctica de uso de Javascript.",
      link: "https://tiburoncin.lat/15177/lab5/",
    },
    {
      title: "Laboratorio CSS",
      description: "Práctica de uso de Javascript.",
      link: "https://github.com/ivanhez/lab4-web",
    },
    {
      title: "Laboratorio HTML",
      description: "Práctica de creación de páginas con HTML.",
      link: "https://github.com/ivanhez/lab3",
    },
    {
      title: "Laboratorio API",
      description: "Práctica de construcción de API REST.",
      link: "https://github.com/ivanhez/beer-api",
    },
  ];

  const wprojects = [
    {
      title: "GSeroprevalence",
      description:
        "Sistema web para el ingreso de resultados de serología para personal de laboratorio, consulta de resultados para participantes.",
      link: "https://www.ces.uvg.edu.gt/page/serologiacoviduvg/",
    },
    {
      title: "Página web institucional, Centro de Estudios en Salud",
      description: "Mantenimiento y administración de página institucional.",
      link: "https://www.ces.uvg.edu.gt/",
    },
  ];

  return (
    <div>
      <section id="portfolio">
        <h2>Sistemas y Tecnologías Web Projects</h2>
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      <section id="paortfolio">
        <h2>Work Projects</h2>
        <div>
          {wprojects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
