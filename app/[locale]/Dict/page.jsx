"use client";

import React from "react";
import { useState } from "react";
import Dict_card from "./Dict_card/Dict_card";
import Popup from "./Popup/Popup";
import { useTranslations } from "next-intl";


const Dictionaries = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Index");


  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="mx-auto w-4/5 pt-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">{t("dict.title")}</h1>

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

    </div>
  );
};

export default Dictionaries;
