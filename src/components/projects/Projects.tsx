"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import image from "@/imgs/sport.jpeg";
import portfolio from "@/imgs/personelPortfolio.jpg";
import taskmanager from "@/imgs/app1.png";
import ecommerce from "@/imgs/Another-Webshop2.png";
import newsapp from "@/imgs/newsApp.png";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Observer pour vérifier si la section Projects est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const projects = [
    {
      title: "Portfolio Personnel",
      description:
        "Un site personnel mettant en valeur mes compétences, mes projets et mes expériences, développé avec React et Tailwind CSS.",
      link: "#",
      image: portfolio, // chemin de l'image
    },
    {
      title: "Application de Gestion de Tâches",
      description:
        "Application web permettant de créer, gérer et suivre les tâches quotidiennes avec des fonctionnalités d'authentification.",
      link: "#",
      image: taskmanager, // chemin de l'image
    },
    {
      title: "E-commerce Shop",
      description:
        "Plateforme d'e-commerce avec gestion des utilisateurs, panier, paiement sécurisé, et intégration Stripe.",
      link: "#",
      image: ecommerce, // chemin de l'image
    },
    {
      title: "Application Mobile de News",
      description:
        "Application mobile développée avec Flutter pour consulter des actualités provenant de plusieurs sources.",
      link: "#",
      image: newsapp, // chemin de l'image
    },
    {
      title: "Application Mobile de News",
      description:
        "Application mobile développée avec Flutter pour consulter des actualités provenant de plusieurs sources.",
      link: "#",
      image: image, // chemin de l'image
    },
    {
      title: "Application Mobile de News",
      description:
        "Application mobile développée avec Flutter pour consulter des actualités provenant de plusieurs sources.",
      link: "#",
      image: image, // chemin de l'image
    },
  ];

  return (
    <div
      id="projects"
      className="section projects-section bg-gray-900 text-gray-200 py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="projects-section-content flex flex-col gap-16">
          <div className="section-title text-center text-3xl font-bold text-white">
            Projects
          </div>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center bg-gray-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="text-white text-lg font-semibold">
                    {project.title}
                  </div>
                  <Link
                    href={project.link}
                    className="bg-gradient-to-br from-white to-blue-violet-claire text-gray-900 px-4 py-2 rounded font-semibold shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-colors duration-300 transform hover:to-blue-violet"
                  >
                    Voir le projet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
