import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import Link from "next/link"; // Next.js Link component
import React from "react"; // React library

// Define the LogoAS component
const LogoAS = ({
  logoSize,
}: {
  logoSize?: { size: number; font: number }; // Optional prop for sizing
}) => {
  return (
    <Link
      href={"/"}
      className={`logo w-fit flex items-center text-black cursor-pointer ${
        logoSize ? "" : "font-[600] md:text-[30px]"
      }`}
      style={{
        fontSize: logoSize ? `${logoSize.font}px` : undefined, // Apply font size if provided
      }}
    >
      <div
        className={`${logoSize ? "font-Quicksand gradient-text" : ""}`}
        style={{
          fontSize: logoSize?.size || "inherit",
          fontWeight: logoSize?.font || "inherit",
        }}
      >
        A
      </div>
      <div
        className={`${
          logoSize ? "ml-[-6px] font-Quicksand gradient-text" : "ml-[-3px]"
        }`}
        style={{
          fontSize: logoSize?.size || "inherit",
          fontWeight: logoSize?.font || "inherit",
        }}
      >
        S
      </div>
    </Link>
  );
};

export default LogoAS; // Export the component
