import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

function Lan() {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Initialize with the default language

  const languageOptions = [
    { label: 'En', locale: 'en' },
    { label: 'Az', locale: 'az' },
    { label: 'Ru', locale: 'ru' },
  ];

  const handleLanguageChange = (locale) => {
    setSelectedLanguage(locale);
    // You can add additional logic here, such as updating the language in your app.
  };

  return (
    <li className="text-xl text-white pl-3">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center gap-x-1.5 py-2 text-[18px]">
            <div onClick={() => router.push("/", { locale: selectedLanguage })}>
              {selectedLanguage}
            </div>
            <ChevronDownIcon
              className="h-4 text-[#ff5f53] mt-2"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition as={Fragment}>
          <Menu.Items className="absolute right-0 z-10 origin-top-right">
            <div className="py-1">
              {languageOptions.map((option) => (
                <Menu.Item key={option.locale}>
                  <div
                    className={`block px-4 py-1 text-sm text-white ${
                      option.locale === selectedLanguage ? 'font-bold' : ''
                    }`}
                    onClick={() => handleLanguageChange(option.locale)}
                  >
                    {option.label}
                  </div>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

export default Lan;
