import React from "react";

const Footer = () => {
  return (
    <footer className="relative inset-x-0 bottom-0 py-5 md:py-10 px-4 md:px-6 w-full">
      <div className="flex justify-between">
        <div className="flex">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=org.kirbit.bildilcin"
            className="cursor-pointer flex hover:underline text-white"
          >
            <img
              className="w-7 h-93"
              src="/playstore.svg"
              alt="playstore_logo"
            />
            <span className="text-white px-3 hidden md:flex">Play Market</span>
          </a>

          <a
            target="_blank"
            href="https://apps.apple.com/us/app/bildil%C3%A7in/id1346573843?ign-mpt=uo%3D4"
            className="pl-8 cursor-pointer flex hover:underline text-white"
          >
            <img 
            className="w-5 h-6" 
            src="/apple.svg" 
            alt="apple_logo" />
            <span className="text-white px-3 hidden md:flex">App Store</span>
          </a>
        </div>

        <div className="flex">
          <a
            target="_blank"
            className="cursor-pointer md:flex hover:underline text-white hidden"
          >
            <img 
            className="w-9 h-6" 
            src="/pdf.png" 
            alt="pdf logo" />
            <span className="text-white pr-9 ">Presentation</span>
          </a>

          <div className="flex">
            <span className="text-white px-3 text-sm">by</span>
            <a target="_blank" href="http://kibrit.tech/">
              <img className="w-18 h-93" src="/kibrit.svg" alt="kibrit_logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
