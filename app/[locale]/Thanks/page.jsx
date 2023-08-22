import React from "react";
import { useTranslations } from "next-intl";

const Thanks = () => {
  const t = useTranslations("Index");

  return (
    <div className="mx-auto w-4/5 py-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        {t("thanks.title")}
      </h1>

      <div className="text-white text-sm">
        <p className="py-4">{t("thanks.content.p1")} </p>

        <div>
          <p className="py-5">
          {t("thanks.content.p1")}
          </p>
          <ul className="list-disc ml-6 px-4">
            <li>
              The vice-president of Azerbaijan National Academy of Sciences,
              doctor of philological sciences, professor{" "}
              <span className="text-[#ff5f53]">Habibbayli Isa Akbar oglu</span>{" "}
              for supporting the idea of the project;
            </li>
            <li>
              The Director of the Institute of Linguistics named after Nasimi of
              Azerbaijan National Academy of Sciences, doctor of philological
              sciences, professor{" "}
              <span className="text-[#ff5f53]">
                Naghisoylu Mohsun Zellabdin oglu
              </span>{" "}
              for providing an opportunity to use the dictionaries compiled by
              the Institute;
            </li>
            <li>
              The students of Azerbaijan University of Languages –{" "}
              <span className="text-[#ff5f53]">Samira Aliyeva Rauf</span> and{" "}
              <span className="text-[#ff5f53]">Javidan Javanshirli Fakhri</span>
              , for their voluntary and dedicated work on preparing e-versions
              of the dictionaries used in the application.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
