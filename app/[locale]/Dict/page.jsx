"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Popup from "./Popup/[id]/Popup";
import { useTranslations } from "next-intl";
import { useProjectContext } from "../Context/ProjectContext";
// import fetchDictionaryList from "./API/API";

const Dictionaries = () => {
  const [popups, setPopups] = useState([]);
  const [data, setData] = useState([]);
  const t = useTranslations("Index");
  const {fetchDictionaryList} = useProjectContext();

  useEffect(() => {
    fetchDictionaryList().then((data) => {
      setData(data);
      setPopups(new Array(data.length).fill(false));
    });
  }, []);

  const openPopup = (index) => {
    const newPopups = [...popups];
    newPopups[index] = true;
    setPopups(newPopups);
  };

  const closePopup = (index) => {
    const newPopups = [...popups];
    newPopups[index] = false;
    setPopups(newPopups);
  };

  return (
    <div className="mx-auto w-4/5 pt-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        {t("dict.title")}
      </h1>

      {data.map((item, index) => (
        <div
          key={item.id}
          className="bg-[#2e3e70] my-4 py-4 px-6 rounded-md flex justify-between cursor-pointer"
          onClick={() => openPopup(index)}
        >
          <div>
            <div
              className="text-white text-sm"
            >
              {item.nameEn}
            </div>
            <div
              className="text-gray-500 text-xs"
            >
              {item.authorEn}
            </div>
          </div>

          <div className="flex items-center">
            <img className="h-5 w-5" src="/i.png" alt="i_icon" />
          </div>
        </div>
      ))}

      {data.map((item, index) => (
        <Popup
          key={item.id}
          isOpen={popups[index]}
          onClose={() => closePopup(index)}
        />
      ))}
    </div>
  );
};

export default Dictionaries;
