import React, { useState, useEffect } from "react";
import LogoAS from "../ui/LogoAS";
import Bars from "../ui/Bars";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLinkPath, setactiveLinkPath] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Vérifie si la page a été défilée de plus de 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ajoute l'écouteur d'événements de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoie l'écouteur lors du démontage
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About me", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Skills", path: "#skills" },
    { title: "Education", path: "#education" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <header
      id="home"
      className={`fixed header w-full py-[10px] md:py-[15px] z-[100] ${
        isScrolled
          ? "bg-white barres bg-opacity-90 text-black transition-all duration-300 shadow-xl"
          : "bg-blue-violet text-white"
      }`}
    >
      <div className="container px-4 sm:px-0 flex items-center justify-between">
        <LogoAS />
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen && (
            <div className="fixed inset-0 bg-gradient-to-br from-white to-blue-violet text-white flex flex-col items-center justify-center z-50">
              {navLinks.map((link: any, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setactiveLinkPath(link.path);
                  }}
                  className="text-2xl font-semibold mb-4 hover:underline"
                >
                  {link.title}
                </Link>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-violet transition"
              >
                Close
              </button>
            </div>
          )}
          <Bars />
        </div>

        <nav className="hidden md:flex gap-[30px] lg:gap-[50px] capitalize font-[400] text-[15px]">
          {navLinks.map((link: any, index) => {
            return (
              <Link
                onClick={() => {
                  setactiveLinkPath(link.path);
                }}
                key={index}
                className={`link flex flex-col ${
                  activeLinkPath === link.path ||
                  activeLinkPath === `#${link.path}`
                    ? "active-link"
                    : ""
                }`}
                href={`${link.path}`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
        <Link
          onClick={() => {
            setactiveLinkPath("#contact");
          }}
          href={"#contact"}
          className={`linght-btn hidden md:flex ${
            isScrolled
              ? " !border-blue-violet hover:bg-violet hover:text-white"
              : ""
          }`}
        >
          hire me !
        </Link>
      </div>
    </header>
  );
};

export default Header;
