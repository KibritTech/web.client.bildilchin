"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Popup from "./Popup/Popup";
import { useTranslations } from "next-intl";
import fetchDictionaryList from "./API/API";

const Dictionaries = () => {
  const [popups, setPopups] = useState([]);
  const [data, setData] = useState([]);
  const t = useTranslations("Index");

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

      {/* <div>
        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.one")}
              author={t("dict.cardSub.one")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.two")}
              author={t("dict.cardSub.two")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.three")}
              author={t("dict.cardSub.three")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.four")}
              author={t("dict.cardSub.four")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.five")}
              author={t("dict.cardSub.five")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.six")}
              author={t("dict.cardSub.six")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.seven")}
              author={t("dict.cardSub.seven")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.eight")}
              author={t("dict.cardSub.eight")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.nine")}
              author={t("dict.cardSub.nine")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.ten")}
              author={t("dict.cardSub.ten")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.eleven")}
              author={t("dict.cardSub.eleven")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.twelve")}
              author={t("dict.cardSub.twelve")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.thirteen")}
              author={t("dict.cardSub.thirteen")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.fourteen")}
              author={t("dict.cardSub.fourteen")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.fifteen")}
              author={t("dict.cardSub.fifteen")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.sixteen")}
              author={t("dict.cardSub.sixteen")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.seventeen")}
              author={t("dict.cardSub.seventeen")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.eighteen")}
              author={t("dict.cardSub.eighteen")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.nineteen")}
              author={t("dict.cardSub.nineteen")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.twenty")}
              author={t("dict.cardSub.twenty")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.twentyone")}
              author={t("dict.cardSub.twentyone")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.twentytwo")}
              author={t("dict.cardSub.twentytwo")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.twentythree")}
              author={t("dict.cardSub.twentythree")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>

        <div>
          <div onClick={openPopup}>
            <Dict_card
              className="cursor-pointer"
              name={t("dict.cardTitle.twentyfour")}
              author={t("dict.cardSub.twentyfour")}
            />
          </div>
          <Popup isOpen={isOpen} onClose={closePopup} />
        </div>
      </div> */}

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
