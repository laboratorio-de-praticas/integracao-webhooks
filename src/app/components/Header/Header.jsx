"use client";

import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="w-full relative z-0 bg-white flex justify-between items-center border-gray-300 border-b-1">
        <div className="w-[305px] h-[80px] flex items-center bg-black rounded-r-[50px] p-5">
          <Image
            src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/logo-governo-do-estado-sp.png"
            alt="São Paulo"
            width={206}
            height={38}
            className="object-contain"
          />
        </div>
        <div className="flex flex-row gap-2 absolute top-4 right-4 bg-white p-4 rounded-lg">
          <a href="#">
            <Image
              src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-flickr.png"
              alt="Flickr"
              width={26}
              height={25}
              className="object-contain"
            />
          </a>
          <a href="#">
            <Image
              src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-linkedin.png"
              alt="Linkedin"
              width={26}
              height={25}
              className="object-contain"
            />
          </a>
          <a href="#">
            <Image
              src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-tiktok.png"
              alt="TikTok"
              width={26}
              height={25}
              className="object-contain"
            />
          </a>
          <a href="#">
            <Image
              src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-youtube.png"
              alt="YouTube"
              width={26}
              height={25}
              className="object-contain"
            />
          </a>
          <a href="#">
            <Image
              src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-twitter.png"
              alt="X (Twitter)"
              width={26}
              height={25}
              className="object-contain"
            />
          </a>
          <a href="#">
            <Image
              src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-insta.png"
              alt="Instagram"
              width={26}
              height={25}
              className="object-contain"
            />
          </a>
          <a href="#">
            <Image
              src="https://www.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-facebook.png"
              alt="Facebook"
              width={26}
              height={25}
              className="object-contain"
            />
          </a>
          <p className="text-gray-600 pr-10">/governosp</p>
        </div>
      </div>
    </header>
  );
}
