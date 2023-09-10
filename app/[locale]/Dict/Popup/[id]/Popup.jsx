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

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          <div ref={popupRef} className="bg-white rounded-lg p-6 z-10 w-full">
            <div className="flex justify-between ">
              <div>
                <h1 className="cursor-default text-[#343d5c] text-xl">{selectedItem.nameEn}</h1>
                <h1 className="cursor-default text-[#7f88a7] text-sm py-2">{selectedItem.authorEn}</h1>
                {/* <p>Dictionarie Author</p> */}
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
              <p className="cursor-default">{selectedItem.dictionaryInfo}</p>
              <p>info</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;