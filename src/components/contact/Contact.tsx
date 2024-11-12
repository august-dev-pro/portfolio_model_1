import Image from "next/image";
import React, { useState } from "react";
import image from "@/imgs/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMapComponent from "@/ui/GoogleMap";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implémenter la logique d'envoi du formulaire
    console.log(formData);
  };

  return (
    <div id="contact" className="contact-section bg-gray-800 text-white py-16">
      <div className="container px-4 sm:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-violet-500 mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-gray-400">
            Je suis disponible pour toute question ou collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 w-full gap-16 md:flex lg:gap-24 justify-center">
          {/* Informations de contact */}
          <div className="flex flex-col gap-10">
            <div className="flex text-center md:text-start flex-col md:flex-row gap-4 justify-center md:justify-start">
              <div className="w-[250px] md:w-[130px] m-[0_auto] md:m-0 rounded-md md:h-[130px] border-[1px] border-b-4 border-r-4 border-r-blue-violet border-b-blue-violet">
                <Image
                  className=" object-cover"
                  src={image.src}
                  alt="ddd"
                  width={500}
                  height={500}
                />
              </div>
              <div className="text-center md:text-start contact-info text-[15px] flex flex-col gap-4">
                <div className="name font-semibold text-[19px]">
                  James Field
                </div>
                <div className="profession font-700">
                  Profefessional Web Developer
                </div>
                <div className="info-item flex justify-center md:justify-start items-center gap-4">
                  <FontAwesomeIcon icon={faMapLocationDot} />
                  <span className=" text-gray-300">123 Rue Exemple, Paris</span>
                </div>
                <div className="justify-center md:justify-start info-item flex items-center gap-4">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className=" text-gray-300">+33 1 23 45 67 89</span>
                </div>
                <div className="justify-center md:justify-start info-item flex items-center gap-4">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className=" text-gray-300">email@example.com</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
              <div
                className="font-semibold border-b w-fit
              pb-1"
              >
                Ma Position sur Google Map
              </div>
              <div className="googlrMap w-full  max-w-[430px] sm:w-[430px] h-[230px] rounded-xl overflow-hidden">
                <GoogleMapComponent />
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form
            onSubmit={handleSubmit}
            className="form-contact h-fit border-2 border-blue-violet p-10 lg:p-16  rounded-[2rem] shadow-lg w-full max-w-[350px] lg:max-w-[450px] m-[0_auto] md:m-0 md:w-[350px] lg:w-[450px]"
          >
            <h3 className="text-2xl font-semibold text-violet-500 text-center mb-4">
              Me Contacter
            </h3>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-[10px] text-[12px] bg-gray-800 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Votre nom complet"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-300 mb-2">
                Téléphone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-[10px] text-[12px] bg-gray-800 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Votre numéro de téléphone"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-[10px] text-[12px] bg-gray-800 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Votre adresse email"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-white text-blue-violet font-semibold rounded-full hover:bg-violet-600 transition hover:bg-blue-violet hover:text-white"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
