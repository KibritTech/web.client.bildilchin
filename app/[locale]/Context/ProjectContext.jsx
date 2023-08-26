"use client";

import { createContext, useContext, useState } from "react";
// import { useTranslations } from "next-intl";

const ProjectContext = createContext({});

export const ProjectContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  // const t = useTranslations("Index");
  const [isOpen, setIsOpen] = useState(false);


  return (
    <ProjectContext.Provider
      value={{ navbar, setNavbar, isProjectOpen, setProjectOpen, isOpen, setIsOpen }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
