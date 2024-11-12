import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImg from "@/imgs/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

const HomeBanniere = () => {
  return (
    <section className="home-banniere relative section md:h-[500px] bg-black md:bg-white text-white">
      <div className="wave-background w-full absolute h-[500px] top-[42px]">
        <svg
          width="100%"
          height="500px"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#000000"></stop>
              <stop offset="50%" stopColor="#9914c1"></stop>
              <stop offset="100%" stopColor="#5825c1"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,262 C 122.42105263157893,234.11483253588517 244.84210526315786,206.22966507177034 321,231 C 397.15789473684214,255.77033492822966 427.0526315789474,333.1961722488038 524,360 C 620.9473684210526,386.8038277511962 784.9473684210526,362.9856459330143 901,311 C 1017.0526315789474,259.0143540669857 1085.157894736842,178.86124401913875 1167,166 C 1248.842105263158,153.13875598086125 1344.421052631579,207.5693779904306 1440,262 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(180 720 345)"
          ></path>
        </svg>
      </div>
      <div className="container px-4 sm:px-0 md:pt-20">
        <div className="home-banniere-content flex flex-col-reverse gap-[30px] sm:flex-row relative md:max-w-[950px] md:m-[0_auto]">
          <div className="description-part text-center m-[0_auto] sm:m-0 md:text-left flex flex-col gap-[10px] max-w-[410px] sm:max-w-[320px] md:max-w-[390px] lg:max-w-[530px] lg:gap-[20px]">
            <div className="text-[19px] capitalize font-[600] md:text-[20px] lg:text-[22px]">
              hi, i am augustin selete
            </div>
            <div className="text-[25px]  capitalize font-[600] md:text-[35px] lg:text-[43px]">
              junior web / mobile developer
            </div>
            <div className="text-[15px] text-justify font-[300] sm:font-[400] md:text-[15px] md:font-[300] ">
              Lorem ipsum dolor sit amet consectur adipisicing elit. Tempora
              delectus necessibus itaque velit, ex temporibus consectetur
            </div>
            <Link
              className="linght-btn-plus m-[0_auto] md:m-0 text-[15px] w-fit mt-3"
              href={""}
            >
              dowload CV <FontAwesomeIcon icon={faDownload} />
            </Link>
          </div>
          <div className="image-part w-[250px] h-[250px] rounded-[50%] border border-blue-violet shadow-lg shadow-violet m-[0_auto] sm:absolute sm:right-0 lg:w-[300px] lg:h-[300px] overflow-hidden">
            <Image src={userImg} alt="user image" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanniere;
