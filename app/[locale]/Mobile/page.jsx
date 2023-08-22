import React from "react";
import { useTranslations } from "next-intl";

const Mobile = () => {
  const t = useTranslations("Index");

  return (
    <div className="mx-auto w-4/5 py-4 h-full text-white text-sm ">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        {t("mobile.title")}
      </h1>
      <p className="pt-5">{t("mobile.p1")}</p>
      <ul className="list-disc ml-6 px-4 py-2">
        <li className="py-2">{t("mobile.list.one")}</li>
        <li className="py-2">
        {t("mobile.list.two")}
        </li>
        <li className="py-2">
        {t("mobile.list.three")}
        </li>
        <li className="py-2">
        {t("mobile.list.four")}
        </li>
        <li className="py-2">
        {t("mobile.list.five")}
        </li>
      </ul>
      <p>
      {t("mobile.p2")}
      </p>
    </div>
  );
};

export default Mobile;
