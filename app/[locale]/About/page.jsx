import React from "react";
import { useTranslations } from "next-intl";

const About_Project = () => {
  const t = useTranslations("Index");

  return (
    <div className="mx-auto w-4/5 pt-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        {t("about.title")}
      </h1>

      <div className=" text-white text-sm ">
        <p className="py-5">
          <span className="font-bold">“Bildilçin” </span>
          {t("about.content.p1")}{" "}
          <a
            href="http://www.kibrit.tech/"
            className="text-[#ff5f53] underline text-sm font-thin block"
          >
            www.kibrit.tech
          </a>
        </p>

        <p className="py-5">
          {t("about.content.p2")}{" "}
          <a
            href="https://president.az/az/articles/view/7744"
            className="text-[#ff5f53] underline text-sm font-thin"
          >
            {t("about.content.a1")}
          </a>
        </p>

        <p className="py-5 italic">
         {t("about.content.p3")}
        </p>
      </div>
    </div>
  );
};

export default About_Project;
