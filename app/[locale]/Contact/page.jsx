"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Index");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [extra, setExtra] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      extra,
      message,
    };
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-4/5 py-4">
      <form className="container grid gap-5" onSubmit={handleSubmit}>
        <h1 className="text-[#ff5f53] text-2xl md:text-5xl font-light md:py-4">
          {t("contact.title")}
        </h1>
        <p className="text-white text-sm"> {t("contact.p")} </p>

        <div className="pt-3 name">
          <div>
            <input
              className="w-full p-3.5 rounded-md bg-[#2e3e70] placeholder:text-gray-500 focus:border-[#2a56a1] focus:outline-none focus:ring-0 focus:border-4 "
              id="name"
              type="text"
              name="name"
              value={name}
              placeholder={t("contact.placeholder.name")}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className=" email md:grid-col-2 ">
            <input
              className="w-full p-3.5 rounded-md bg-[#2e3e70] placeholder:text-gray-500 focus:border-[#2a56a1] focus:outline-none focus:ring-0 focus:border-4 "
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              placeholder={t("contact.placeholder.email")}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" email md:grid-col-2 ">
            <input
              className="w-full p-3.5 rounded-md bg-[#2e3e70] placeholder:text-gray-500 focus:border-[#2a56a1] focus:outline-none focus:ring-0 focus:border-4 "
              id="extra"
              type="text"
              name="extra"
              value={extra}
              placeholder={t("contact.placeholder.institution")}
              onChange={(e) => setExtra(e.target.value)}
            />
          </div>
        </div>

        <div className=" message">
          <input
            className="w-full h-44 rounded-md bg-[#2e3e70] placeholder:absolute placeholder:top-0 placeholder:p-3 placeholder:text-gray-500 focus:border-[#2a56a1] focus:outline-none focus:ring-0 focus:border-4"
            id="message"
            name="message"
            value={message}
            placeholder={t("contact.placeholder.message")}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <p className="text-[#ff5f53] text-xs">{t("contact.note")} </p>

        <div className="py-1 button flex justify-end">
          <button
            className="bg-[#ff5f53] py-2 px-8 rounded-md text-white text-sm"
            type="submit"
          >
            {t("contact.button")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
