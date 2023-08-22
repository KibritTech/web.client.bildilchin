"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import HomePopup from "./HomePopUp/HomePopup";
import React, { useEffect, useRef } from "react";

const names = [
  "John",
  "Alice",
  "Bob",
  "Eve",
  "Michael",
  "Emily",
  "David",
  "Sophia",
  "Daniel",
  "Olivia",
  "William",
  "Ava",
  "James",
  "Emma",
  "Alexander",
  "Isabella",
  "Benjamin",
  "Mia",
  "Matthew",
  "Charlotte",
];

export default function Home({ children, isOpen, onClose }) {
  const t = useTranslations("Index");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const heightClass = inputValue ? "h-96" : "h-32";
  const [suggestions, setSuggestions] = useState([]);
  const [activeOption, setActiveOption] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(""); // State to store the selected name
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleButtonClick = (option) => {
    setActiveOption(option === activeOption ? "" : option);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const filteredSuggestions = names.filter((name) =>
      name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div>
      <main className="h-full">
        <div
          className={`bg-gray-100 ${
            inputValue ? "h-96" : "h-32"
          } relative flex lg:flex-grow flex-col pt-5 items-center mx-auto w-[45%] rounded-[5px] ${
            isPopupOpen ? "right-[22%]" : ""
          }`}
        >
          <div className="p-3 flex items-start relative top-[-16px] w-full">
            <div className="relative flex items-start h-9 rounded-3px bg-white overflow-hidden w-full border-1 border-gray-300 ">
              <div className="grid place-items-start h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute top-1 left-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 placeholder:text-gray-500"
                type="text"
                id="search"
                placeholder={t("home.placeholder")}
                value={inputValue}
                onChange={handleInputChange}
                list="nameSuggestions"
              />
            </div>

            <div className="relative bg-white">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-sm pr-3 py-2 inline-flex items-center text-gray-400"
                type="button"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <svg
                  className="w-2.5 h-2.5 mr-2 text-[#ff5f53]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                EN
              </button>

              <div
                id="dropdown"
                className={`absolute z-50 ${
                  dropdownVisible ? "block" : "hidden"
                } bg-[#475a95] divide-y divide-gray-100 rounded-lg shadow w-fit border-gray-500 border-2 `}
              >
                <ul
                  className="py-2 text-sm text-white"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a href="" className="block px-2 py-0.5 hover:bg-[#488bff]">
                      PY
                    </a>
                  </li>
                  <li>
                    <a href="" className="block px-2 py-0.5 hover:bg-[#488bff]">
                      AZ
                    </a>
                  </li>
                  <li>
                    <a href="" className="block px-2 py-0.5 hover:bg-[#488bff]">
                      EN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full flex px-2 relative top-[-11px]">
            <button className="bg-[#ff5f53] text-white py-1 sm:px-4 rounded-l-[3px] w-full">
              {t("home.wordlist")}
            </button>
            <button className="bg-[#475a95] text-white py-1 sm:px-6 rounded-r-[3px] w-full">
              {t("home.entries")}
            </button>
          </div>

          <div className={` ${heightClass} flex justify-evenly w-full mt-2`}>
            {inputValue && (
              <>
                <div className="underline decoration-green-600 ">
                  <button
                    className={`h-fit text-gray-500 ${
                      activeOption === "begins" ? " text-red-400" : ""
                    }`}
                    onClick={() => handleButtonClick("begins")}
                  >
                    {t("home.options.begins")}
                  </button>
                </div>

                <button
                  className={`h-fit text-gray-500 ${
                    activeOption === "contains" ? " text-red-400" : ""
                  }`}
                  onClick={() => handleButtonClick("contains")}
                >
                  {t("home.options.contains")}
                </button>

                <button
                  className={`h-fit text-gray-500 ${
                    activeOption === "ends" ? " text-red-400" : ""
                  }`}
                  onClick={() => handleButtonClick("ends")}
                >
                  {t("home.options.ends")}
                </button>
              </>
            )}
          </div>

          {inputValue !== "" && suggestions.length > 0 && (
            <div className="absolute bottom-0 bg-white mt-2 w-full h-56 overflow-y-auto border border-gray-300 rounded-md">
              <ul className="py-2 text-sm text-black">
                {suggestions.map((name, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setInputValue(name);
                      setSelectedName(name); // Set the selected name in the state
                      setIsPopupOpen(true);
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* <HomePopup
            className=""
            isOpen={isPopupOpen}
            onClose={closePopup}
          /> */}

          {isPopupOpen && (
            <div className="flex absolute top-0 left-[102%] justify-center z-50 w-[100%] h-96 sm:h-32">
              <div ref={popupRef} className="bg-white rounded-lg p-6 z-10 w-[150%]
               ">
                <h2 className="text-lg font-bold mb-4">{selectedName}</h2>
                <p className="mb-4">This is the content of the popup.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
