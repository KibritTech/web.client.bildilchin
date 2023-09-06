"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Popup from "./Popup/[id]/Popup";
import { useTranslations } from "next-intl";
import { useProjectContext } from "../Context/ProjectContext";

const Dictionaries = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [popups, setPopups] = useState([]);
  const [data, setData] = useState([]);
  const t = useTranslations("Index");
  const { fetchDictionaryList } = useProjectContext();

  useEffect(() => {
    fetchDictionaryList()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []);

  const openPopup = (item) => {
    setSelectedItem(item);
    const newPopups = popups.map((popup, index) =>
      index === item.id ? true : popup
    );
    setPopups(newPopups);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setPopups(new Array(data.length).fill(false));
  };

  return (
    <div className="mx-auto w-4/5 pt-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        {t("dict.title")}
      </h1>

      {data.map((item) => (
        <div
          key={item.id}
          className="bg-[#2e3e70] my-4 py-4 px-6 rounded-md flex justify-between cursor-pointer"
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
