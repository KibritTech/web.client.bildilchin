import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Options from "./Options/Options";
import Icon from "./Icon/Icon";

const Header = ({ }) => {
  const t = useTranslations("Index");

  return (
    <nav className="w-full z-10 ">
      <div className="justify-between md:items-center md:flex px-5 lg:px-10">
        <div>
          <div className="flex items-center justify-between py-4 md:py-8 md:block">
            <Link href="/">
              <div className="text-xs">
                <img className="w-20 md:w-32" src="/logo.svg" alt="logo" />
              </div>
            </Link>

            <Icon />
          </div>
        </div>

        <div className="">
          <div>
            <Options />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
