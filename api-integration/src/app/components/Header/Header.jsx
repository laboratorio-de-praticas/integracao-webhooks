"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="w-full relative z-0 bg-white flex justify-between items-center border-b border-gray-300">
        <div className="w-[305px] h-[80px] flex items-center bg-black rounded-r-[50px] p-5">
          <Image
            src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/logo-governo-do-estado-sp.png"
            alt="São Paulo"
            width={150}
            height={38}
            className="object-contain"
          />
        </div>

        <div className="relative">
          <button
            className="md:hidden p-2 text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Fechar" : "Menu"}
          </button>
          <div
            className={`flex flex-col md:flex-row gap-2 absolute md:static top-4 right-4 bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-md md:shadow-none transition-all duration-300 ${
              isOpen ? "block" : "hidden md:flex"
            }`}
          >
            <a href="#">
              <Image
                src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-flickr.png"
                alt="Flicker"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-linkedin.png"
                alt="Linkedin"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-tiktok.png"
                alt="TikTok"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-youtube.png"
                alt="Youtube"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-twitter.png"
                alt="X(Twitter)"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-insta.png"
                alt="Instagram"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#">
              <Image
                src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <p className="text-gray-600">/governosp</p>
          </div>
        </div>
      </div>
    </header>
  );
}
