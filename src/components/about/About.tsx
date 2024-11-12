import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/imgs/user.png";

const About = () => {
  return (
    <section
      id="about"
      className="about-section section md:mt-10 lg:mt-[100px]"
    >
      <div className="container px-4 sm:px-0">
        <div className="about-section-content flex flex-col items-center  gap-[30px] sm:flex-row relative md:max-w-[950px] md:m-[0_auto] justify-end">
          <div className="image-part w-[250px] h-[250px] border border-blue-violet shadow-lg shadow-violet sm:absolute sm:left-0 lg:w-[300px] lg:h-[300px] overflow-hidden">
            <Image src={image} alt="user image" width={500} height={500} />
          </div>{" "}
          <div className="description-part text-left flex flex-col gap-[10px] max-w-[410px] sm:max-w-[320px] md:max-w-[390px] lg:max-w-[530px] lg:gap-[20px]">
            <div className="section-title text-center">about me</div>
            <div className="text-[15px] text-justify font-[300] sm:font-[300] md:text-[15px]">
              Lorem ipsum dolor sit amet consectur adipisicing elit. Tempora ex
              temporibus
            </div>
            <ul className="w-full">
              <li className="flex w-full items-center">
                <span className="w-[100px] font-bold  capitalize flex flex-row justify-start items-center gap-2">
                  <div className="w-1 h-1 rounded-[50%] bg-black"></div>
                  frontend:
                </span>
                <div className="ml-2 text-[13px]">
                  HTML, CSS, SCSS, taylwind, react
                </div>
              </li>
              <li className="flex w-full items-center">
                <span className="w-[100px] font-bold capitalize flex flex-row justify-start items-center gap-2">
                  <div className="w-1 h-1 rounded-[50%] bg-black"></div>Backend:
                </span>
                <div className="ml-2 text-[13px]">
                  Node, express, js, Next, mongoose
                </div>
              </li>
              <li className="flex w-full items-center">
                <span className="w-[100px] font-bold capitalize flex flex-row justify-start items-center gap-2">
                  <div className="w-1 h-1 rounded-[50%] bg-black"></div>
                  database:
                </span>
                <div className="ml-2 text-[13px]">mySql, FireBase, mangoDB</div>
              </li>
              <li className="flex w-full items-center">
                <span className="w-[110px] font-bold capitalize flex flex-row justify-start items-center gap-2">
                  <div className="w-1 h-1 rounded-[50%] bg-black"></div>
                  framework:
                </span>
                <div className="ml-2 text-[13px]">Nesxt.js, Symfony</div>
              </li>
            </ul>
            <div className="text-[15px] text-justify font-[300] sm:font-[400] md:text-[15px] md:font-[300] ">
              Lorem ipsum dolor sit amet consectur adipisicing elit. Tempora
              delectus necessibus itaque velit, ex temporibus consectetur
            </div>
            <Link
              className="linght-btn-plus text-[15px] w-fit mt-3 !border-black hover:bg-black hover:text-white"
              href={""}
            >
              see more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
