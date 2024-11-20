import React from "react";

const Home = () => {
  const languages = [
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "R", level: 90 },
    { name: "PHP", level: 75 },
    { name: "SQL", level: 80 },
    { name: "HTML", level: 75 },
    { name: "CSS", level: 75 },
    { name: "Java", level: 65 },
    { name: "C++", level: 70 },
  ];
  const tools = [
    { name: "Microsoft Office", level: 95 },
    { name: "Microsoft Excel", level: 95 },
    { name: "Wordpress", level: 80 },
    { name: "Drupal", level: 70 },
    { name: "Photoshop", level: 70 },
    { name: "DaVinci Resolve", level: 60 },
  ];
  return (
    <section id="home">
      <h1>CURRICULUM VITAE</h1>
      <section>
        <h3>
          <u>PREPARACIÓN ACADÉMICA</u>
        </h3>
        <p>ESTUDIANTE DE LICENCIATURA EN INGENIERÍA EN COMPUTACIÓN</p>
        <p>
          <b>Universidad del Valle de Guatemala</b>
        </p>
        <p>
          11 semestre de la licenciatura en Ingeniería en Computación. Dentro de
          la carrera se abarcan disciplinas que están compuestas por ciencia y
          tecnología aplicada al análisis, diseño, construcción, implementación
          y mantenimiento de software.
        </p>
      </section>
      <section>
        <h3>Programming Languages</h3>
        <div className="languages">
          {languages.map((language, index) => (
            <div key={index} className="language">
              <label>{language.name}</label>
              <div className="meter-container" title={`${language.level}%`}>
                <meter value={language.level} min="0" max="100"></meter>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3>Software tools</h3>
        <div className="languages">
          {tools.map((tool, index) => (
            <div key={index} className="language">
              <label>{tool.name}</label>
              <div className="meter-container" title={`${tool.level}%`}>
                <meter value={tool.level} min="0" max="100"></meter>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3>
          <u>CURSOS Y CONFERENCIAS</u>
        </h3>
        <ul>
          <li>19 Convención Científica e Ingeniería y Arquitectura 2018</li>
          <li>Diplomado en Ciberseguridad y Ciberdefensa 2021</li>
        </ul>
      </section>
      <section>
        <h3>
          <u>PUBLICACIONES</u>
        </h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.researchgate.net/publication/329453725_PREDICCION_DE_CAMBIO_DE_CARRERA_EN_LOS_ESTUDIANTES_DE_LA_UNIVERSIDAD_DEL_VALLE_DE_GUATEMALA"
            >
              {" "}
              Hernández, M. y García, L. 2018. Predicción del cambio de carrera
              en los estudiantes de la Universidad del Valle de Guatemala. XIX
              Convención de Ingeniería y Arquitectura, Universidad Tecnológica
              de Habana José Antonio Echeverría, Cuba. ISBN 978-959-261-585-4
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3>
          <u>EXPERIENCIA LABORAL</u>
        </h3>
        <p>
          <b>
            Centro de Estudios en Salud e la Universidad del Valle de Guatemala
          </b>
        </p>
        <h5>
          Analista de datos del Centro de Estudios en Salud de la Universidad
          del Valle de Guatemala. Desarrollando análisis y estadísticas de datos
          del centro de salud. Desarrollo de sistemas web fullstack para gestión de datos de
          distintos proyectos. Mantenimiento y mejora de página web
          institucional.
        </h5>
        <p>
          Proyecto Vigilancia integrada colaborativa de infecciones prioritarias
          (VICo-IP): proyecto de vigilancia de síndromes agudos respiratorio,
          febril y diarreico en servicios de salud de la red pública. Se trabajó
          en un sistema para el ingreso de resultados de las muestras
          recolectadas para mantener un control de calidad de los datos.
          (Diciembre 2022 – Septiembre 2024)
        </p>
        <p>
          Proyecto GSeroprevalence: estudio para determinar la presencia de
          anticuerpos contra el virus SARS-CoV-2 causante del COVID-19 en
          población general del Departamento de Guatemala. Se hicieron
          plataformas web para comparar los datos y presentar los resultados
          para conocer mejor el comportamiento de la enfermedad. (Marzo 2022 –
          Noviembre 2022)
        </p>
        <p>
          Proyecto Una Salud Poptún: proyecto de vigilancia comunitaria de
          enfermedades tipo influenza en humanos y animales. Se hicieron
          primeros análisis para mostrar información general de los datos. Se
          hicieron transformaciones a los datos para verificar los resultados
          con otras bases de datos. (Febrero 2019)
        </p>
        <p>
          Proyecto TAC Febriles: proyecto de enfermedades febriles y rotavirus.
          Se hicieron nuevas bases de datos a partir de los resultados de
          laboratorio para proveer información unificada. Se automatizó la
          extracción y transformación de información de equipo de laboratorio a
          bases de datos manejables. (Octubre y Noviembre 2018)
        </p>
        <p>
          Proyecto ASQ: estudio de enfermedades tipo influenza a niños de 3 a 4
          meses. Se hicieron transformaciones a la estructura de los datos para
          unificar con otras bases de datos. (Septiembre 2018)
        </p>
        <p>
          Proyecto ZINC: estudio de enfermedades de dengue, zika y chinkungunya.
          Se analizaron los datos para encontrar incongruencias y limpiar la
          base de datos, como también presentar hallazgos en los resultados de
          laboratorio. (Julio y Agosto 2018)
        </p>
        <p>Referencia:</p>
        <ul>
          <li>Juan Carlos Romero Castrillón</li>
          <li>Coordinador IT y manejo de datos</li>
          <li>
            Email:
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:jromero@uvg.edu.gt"
            >
              jromero@uvg.edu.gt
            </a>
          </li>

          <li>
            Teléfono:
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+502 4108 1738"
            >
              +502 4108 1738
            </a>
          </li>
          <li>
            Centro de Estudios en Salud, Instituto de Investigaciones,
            Universidad del Valle de Guatemala
          </li>
          <li>
            18 avenida 11-95 zona 15, Vista Hermosa III Ciudad de Guatemala
          </li>
        </ul>
      </section>
      <section>
        <p>
          <b>
            {" "}
            Secretaria de Asuntos Administrativos y de Seguridad de la
            Presidencia
          </b>
        </p>
        <p>
          Desarrollador de software y técnico en soporte, en el departamento de
          desarrollo de la Dirección de Comunicaciones e Informática de la
          Secretaría de Asuntos Administrativos y de Seguridad. Desarrollador
          fullstack utilizando PHP y javascript con base de datos MSSQL,
          realizando proyectos en base a las necesidades requeridas para
          automatización de procesos en la institución, trabajos distintos de
          informática y soporte como asistencia a usuario, mantenimiento de
          equipos, cableado estructurado, montaje de eventos, capacitaciones de
          personal en temas informáticos y ofimática. Desarrollo y mantenimiento
          de página web institucional, abarcando mejoras constantes y contenido
          actualizado para la comunicación de información al público. (Abril
          2020 – Enero 2022)
        </p>
        <p>Referencia:</p>
        <ul>
          <li>
            Ing. Néstor Obdulio González López Director Técnico{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:nestor.gonzalez@saas.gob.gt"
            >
              nestor.gonzalez@saas.gob.gt
            </a>
          </li>
          <li>
            Secretaría de Asuntos Administrativos y de Seguridad 6 Av. "A" 4-18
            Zona 1 Callejón "Del Manchén"
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Home;
