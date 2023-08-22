import React from "react";
import { useTranslations } from "next-intl";

const Participate = () => {
  const t = useTranslations("Index");

  return (
    <div className="mx-auto w-4/5 py-4 text-white text-sm">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        {t("participate.title")}{" "}
      </h1>
      <div>
        <h2 className="text-[#ff5f53] py-3">
          {" "}
          {t("participate.content.innerTitleOne")}{" "}
        </h2>
        <p className="">{t("participate.content.p1")}</p>
        <ul className="list-disc ml-6 px-4 py-2">
          <li className="py-2">{t("participate.content.list.one")} </li>
          <li className="py-2">{t("participate.content.list.two")}</li>
        </ul>
      </div>

      <div>
        <h2 className="text-[#ff5f53] ">
          {t("participate.content.innerTitleTwo")}
        </h2>
        <p className="py-2">{t("participate.content.p2")}</p>
        <p className="py-1"> {t("participate.content.p3")}</p>
        <p> {t("participate.content.p4")}</p>
      </div>
    </div>
  );
};

export default Participate;
