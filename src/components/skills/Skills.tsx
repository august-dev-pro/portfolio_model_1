/* import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "HTML & CSS",
      level: 90,
    },
    {
      title: "JavaScript",
      level: 85,
    },
    {
      title: "MySql",
      level: 80,
    },
    {
      title: "TypeScript",
      level: 70,
    },
    {
      title: "MongoDB",
      level: 75,
    },
    {
      title: "UI/UX Design",
      level: 65,
    },
  ];

  return (
    <div className="section skills-section bg-zinc-950 text-gray-400">
      <div className="container px-4 sm:px-0">
        <div className="skills-section-content flex flex-col gap-16 lg:px-20">
          <div className="section-title text-center text-white">Skills</div>
          <div className="section-content-items grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill px-8 py-4 bg-zinc-900 rounded-md fex flex-col"
              >
                <div className="text-[]">{skill.title}</div>
                <div className="skill-level mt-6 relative p-[2px] bg-white rounded-full overflow-hidden">
                  <div
                    className={`level-bar absolute top-0 bottom-0 left-0 h-full bg-violet`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
 */
"use client";
import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observer pour vérifier si la section Skills est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // La section est considérée visible à 30% de son affichage
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { title: "HTML & CSS", level: 90 },
    { title: "JavaScript", level: 85 },
    { title: "MySql", level: 80 },
    { title: "TypeScript", level: 70 },
    { title: "MongoDB", level: 75 },
    { title: "UI/UX Design", level: 65 },
  ];

  return (
    <div
      id="skills"
      className="section skills-section bg-zinc-950 text-gray-400"
      ref={sectionRef}
    >
      <div className="container px-4 sm:px-0">
        <div className="skills-section-content flex flex-col gap-16 lg:px-20">
          <div className="section-title text-center text-white">Skills</div>
          <div className="section-content-items grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill px-8 py-4 bg-zinc-900 rounded-md flex flex-col"
              >
                <div className="text-lg">{skill.title}</div>
                <div className="skill-level mt-6 relative p-[2px] bg-white rounded-full overflow-hidden">
                  <div
                    className={`level-bar absolute top-0 bottom-0 left-0 h-full bg-violet transition-all duration-1000 ease-in-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
