"use client";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next/link";
import { Fragment } from "react";
import { useProjectContext } from "../../Context/ProjectContext";

const Options = () => {
  const router = useRouter();
  const t = useTranslations("Index");
  const { navbar, setNavbar, isProjectOpen, setProjectOpen } =
    useProjectContext();

  return (
    <div
      className={`flex-1 justify-self-center md:block relative" ${
        navbar ? "block" : "hidden"
      }`}
    >
      <ul className="md:flex bg-[#3c4e88] absolute inset-x-0 top-0 md:relative z-10">
        <li className="pb-3 text-lg py-2 px-3 justify-start hidden md:inline ">
          <Link
            target="_blank"
            href="https://www.facebook.com/kibrittech/"
            onClick={() => setNavbar(!navbar)}
          >
            <img
              className="w-7 h-93 mx-auto"
              src="/facebook.svg"
              alt="facebook_logo"
            />
          </Link>
        </li>

        <li className="text-md text-white py-2 px-3">
          <Link href="/Help" onClick={() => setNavbar(!navbar)}>
            {t("nav.help")}
          </Link>
        </li>
        <li className="text-md text-white py-2 px-3">
          <Link href="/Dict" onClick={() => setNavbar(!navbar)}>
            {t("nav.dictionaries")}
          </Link>
        </li>

        <li className="text-md text-white py-2 px-3 relative">
          <div>
            <button
              className="inline-flex w-full gap-x-1.5 rounded-md text-md"
              onClick={() => setProjectOpen(!isProjectOpen)}
            >
              {t("nav.project")}
              <ChevronDownIcon
                className={`h-4 text-[#ff5f53] mt-2 transform ${
                  isProjectOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>

          {isProjectOpen && (
            <div className="my-2 md:absolute left-0 z-10 w-48 origin-top-right">
              <div className="">
                <a href="/About" className="block px-4 py-2 text-md text-white">
                  {t("nav.about")}
                </a>
                <a
                  href="/Thanks"
                  className="block px-4 py-2 text-md text-white"
                >
                  {t("nav.thanks")}
                </a>
                <a
                  href="/Participate"
                  className="block px-4 pt-2 text-md text-white"
                >
                  {t("nav.participate")}
                </a>
              </div>
            </div>
          )}
        </li>

        <li className="text-md text-white py-2 px-3">
          <Link href="/Mobile" onClick={() => setNavbar(!navbar)}>
            {t("nav.mobile")}
          </Link>
        </li>
        <li className="text-md text-white py-2 px-3">
          <Link href="/Contact" onClick={() => setNavbar(!navbar)}>
            {t("nav.contact")}
          </Link>
        </li>

        <div className="flex flex-row justify-between">
          <li className="pb-3 text-lg py-2 px-3 justify-start md:hidden">
            <Link
              target="_blank"
              href="https://www.facebook.com/kibrittech/"
              onClick={() => setNavbar(!navbar)}
            >
              <img
                className="w-7 h-93 mx-auto"
                src="./facebook.svg"
                alt="facebook_logo"
              />
            </Link>
          </li>

          <li className="text-xl text-white pl-3 ">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center gap-x-1.5 py-2 text-[18px]">
                  <div onClick={() => router.push("/", { locale: "en" })}>
                    En
                  </div>
                  <ChevronDownIcon
                    className="h-4 text-[#ff5f53] mt-2"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                // enter="transition ease-out duration-100"
                // enterFrom="transform opacity-0 scale-95"
                // enterTo="transform opacity-100 scale-100"
                // leave="transition ease-in duration-75"
                // leaveFrom="transform opacity-100 scale-100"
                // leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 origin-top-right">
                  <div className="py-1">
                    <Menu.Item>
                      <div
                        className="block px-4 py-1 text-sm text-white "
                        onClick={() => router.push("/", { locale: "az" })}
                      >
                        Az
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <Menu.Item>
                        <div
                          className="block px-4 py-1 text-sm text-white "
                          onClick={() => router.push("/", { locale: "ru" })}
                        >
                          Ru
                        </div>
                      </Menu.Item>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Options;
