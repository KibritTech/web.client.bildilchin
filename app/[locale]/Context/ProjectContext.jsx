"use client";

import { createContext, useContext, useState } from "react";
// import { useTranslations } from "next-intl";

const ProjectContext = createContext({});

export const ProjectContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  // const t = useTranslations("Index");
  const [isOpen, setIsOpen] = useState(false);


  
const fetchDictionaryList = async () => {
  const response = await fetch('https://bildilchin.az:8888/bildilchin/get/dictionaryList', { cache: 'force-cache' });
 
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return response.json();
};



  return (
    <ProjectContext.Provider
      value={{ navbar, setNavbar, isProjectOpen, setProjectOpen, isOpen, setIsOpen, fetchDictionaryList }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
