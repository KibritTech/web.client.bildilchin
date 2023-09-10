"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useProjectContext } from "../Context/ProjectContext";
import Popup from "./Popup/[id]/Popup";

const Dictionaries = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [popups, setPopups] = useState([]); 
  const [data, setData] = useState([]);
  const t = useTranslations("Index");
  const { fetchDictionaryList } = useProjectContext();

  useEffect(() => {
    fetchDictionaryList()
      .then((fetchedData) => {
        setData(fetchedData);
        setPopups(new Array(fetchedData.length).fill(false));
      })
      .catch((error) => console.error("Failed to fetch data:", error));
  }, []);
  

  const openPopup = (item) => {
    setSelectedItem(item);
    setPopups(popups.map((_, index) => index === item.id ? true : false));
  };

  const closePopup = () => {
    setSelectedItem(null);
    setPopups(popups.map(() => false));
  };

  return (
    <div className="mx-auto w-[90%] sm:w-[72%] pt-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        {t("dict.title")}
      </h1>

      {data.map((item) => (
        <div
          key={item.id}
          className="bg-[#2b3a67] my-4 py-4 px-6 rounded-md flex justify-between cursor-pointer"
          onClick={() => openPopup(item)}
        >
          <div>
            <div className="text-white text-sm">{item.nameEn}</div>
            <div className="text-gray-500 text-xs">{item.authorEn}</div>
          </div>

          <div className="flex items-center">
            <img className="h-5 w-5" src="/i.png" alt="i_icon" />
          </div>
        </div>
      ))}

      {selectedItem && (
        <Popup
          isOpen={popups[selectedItem.id]}
          onClose={closePopup}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
};

export default Dictionaries;
