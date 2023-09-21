"use client";

import React, { useEffect, useRef } from "react";

const Popup = ({ isOpen, onClose, selectedItem }) => {
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

  const currentURL = typeof window !== "undefined" ? window.location.href : "";

  let name = "";
  let author = "";
  let info = "";

  if (currentURL.includes("http://localhost:3000/az/Dict")) {
    name = selectedItem.nameAz;
    author = selectedItem.authorAz;
    info = selectedItem.dictionaryInfoAz;
  } else if (currentURL.includes("http://localhost:3000/ru/Dict")) {
    name = selectedItem.nameRu;
    author = selectedItem.authorRu;
    info = selectedItem.dictionaryInfoRu;
  } else {
    name = selectedItem.nameEn;
    author = selectedItem.authorEn;
    info = selectedItem.dictionaryInfoEn;
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          <div ref={popupRef} className="bg-white rounded-lg p-6 z-10 w-full">
            <div className="flex justify-between">
              <div>
                <h1 className="cursor-default text-[#343d5c] text-xl">{name}</h1>
                <h1 className="cursor-default text-[#7f88a7] text-sm py-2">{author}</h1>
              </div>

              <svg
                onClick={onClose}
                className="h-8 w-8 text-[#ff5f53] cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <div>
              <p className="cursor-default">{info}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;