"use client";
import React from "react";
import LogoAS from "../ui/LogoAS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationDot,
  faMessage,
  faPaperPlane,
  faPhone,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About me",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Skills",
      path: "#skills",
    },
    {
      title: "pricing",
      path: "#",
    },
    {
      title: "Education",
      path: "#education",
    },

    {
      title: "services",
      path: "",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  const activeLinkPathName = usePathname();
  return (
    <footer className="footer text-gray-pink py-[30px] bg-black">
      <div className="container px-4 sm:px-0 flex flex-col gap-[30px]">
        <LogoAS logoSize={{ size: 35, font: 600 }} />
        <div className="footer-content flex flex-col gap-[35px] sm:flex-row sm:flex-wrap sm:gap-[50px] lg:flex-nowrap lg:justify-between">
          <div className="describe-section max-w-[400px]">
            <div className="speach font-[500] max-w-[400px] sm:max-w-[350px] md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              itaque nulla suscipit asperiores nihil, quidem odit voluptates
              ullam molestias repellendus.
            </div>
            <div className="contact_infos font-[300]">
              <div className="item localisation">
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                Paris , Marseille 021
              </div>
              <div className="item email">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                portfoliomodel1@gmail.com
              </div>
              <div className="item phone">
                <FontAwesomeIcon className="icon" icon={faPhone} /> +5 057 577
                584 588 9
              </div>
            </div>
          </div>
          <div className="footer-navigation-section max-w-[400px] flex flex-col gap-[15px] lg:w-[280px]">
            <div className="title text-[17px] font-[800] text-violet underline">
              Navigation
            </div>
            <div className="links grid grid-cols-3 gap-4 text-[15px] sm:grid-cols-2 font-[300] lg:w-full justify-between lg:text-[16px] lg:font-[400] md:w-[280px]">
              {navLinks.map((link: any, index: number) => (
                <Link
                  key={index}
                  className={`link w-fit hover:link-gradient transition-all capitalize ${
                    activeLinkPathName == link.path ? "activelink" : ""
                  }`}
                  href={`${link.path}`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="message_send w-fit flex flex-col gap-[15px]">
            <div className="title text-[18px] font-[700] capitalize text-violet">
              get the latest information
            </div>
            <div className="content flex flex-col gap-[20px]">
              <div className="mailAdressInput grid grid-cols-[1fr_50px] w-full overflow-hidden sm:w-min">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail Adress"
                  className=" w-full sm:max-w-none sm:w-[200px] lg:w-[280px]"
                />
                <div className="h-[43px] bg-violet px-[15px] flex items-center rounded-br-[.4rem] rounded-tr-[.4rem]">
                  <FontAwesomeIcon className=" rotate-45" icon={faPaperPlane} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-btom-bar w-full h-[1px] gradient-bar rounded-[100%]"></div>
        <div className="copyright mt-[-20px] sm:mt-[-10px] text-center gap-[5px] flex flex-col sm:flex-row justify-center sm:justify-between text-[12px] md:text-[14px]">
          <div className="capitalize">
            <FontAwesomeIcon icon={faCopyright} /> 2024 | Augustin Selete. all
            rights reserved.
          </div>
          <div className="capitalize">
            user trems & conditions | privacy policy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
