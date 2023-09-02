import { useProjectContext } from "@/app/[locale]/Context/ProjectContext";
import React, { useEffect, useRef, useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const { fetchDictionaryList } = useProjectContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchDictionaryList()
        .then((data) => {
          setData(data);
          setPopups(new Array(data.length).fill(false));
        })
        .catch((error) => {
          console.error('Failed to fetch data:', error);
        });
    }
  }, [isOpen]);

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
            {data.map((item) => (
              <div key={item.id}>
                <p>{item.dictionaryInfo}</p> 
                {/* <p>{item.shortNameRu}</p>  */}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
