import React from "react";

const Educational = () => {
  const educationalExperiences = [
    {
      date: "2023-2024",
      title: "Bootcamp Développement Web",
      description:
        "Formation intensive axée sur le développement full-stack, incluant HTML, CSS, JavaScript, Node.js, React, et bases de données comme MongoDB. Réalisation de plusieurs projets, y compris des applications web dynamiques.",
    },
    {
      date: "2023-2024",
      title: "Certificat en Programmation Mobile",
      description:
        "Formation spécialisée en développement d'applications mobiles avec Flutter et Dart, comprenant la création d'interfaces utilisateurs intuitives et la gestion de données à l'aide d'API REST.",
    },
    {
      date: "2023-2024",
      title: "Licence en Informatique",
      description:
        "Étude approfondie des concepts fondamentaux de l'informatique : structures de données, algorithmes, programmation orientée objet (Java, Python) et principes de bases de données relationnelles.",
    },
    {
      date: "2023-2024",
      title: "Formation en UI/UX Design",
      description:
        "Cours sur les principes du design d'interface utilisateur et de l'expérience utilisateur. Création de maquettes interactives et compréhension des processus de conception centrée sur l'utilisateur.",
    },
  ];

  return (
    <div id="education" className="section educational-section bg-gray-50">
      <div className="container px-4 sm:px-0">
        <div className="educational-section-content flex flex-col gap-16 lg:px-20">
          <div className="section-title text-center">
            Educational Experiences
          </div>
          <div className="section-content-items grid grid-cols-1 md:grid-cols-2 gap-10">
            {educationalExperiences.map((item: any, index) => (
              <div
                className="experience border p-3 rounded-xl border-blue-violet flex flex-col gap-5 items-center text-center md:items-start md:text-start"
                key={index}
              >
                <div className="date border-2 border-blue-violet text-blue-violet px-4 py-2 w-fit rounded-md font-semibold">
                  {item.date}
                </div>
                <div className="title text-[20px] font-semibold">
                  {item.title}
                </div>
                <div className="description text-justify sm:text-start">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educational;
