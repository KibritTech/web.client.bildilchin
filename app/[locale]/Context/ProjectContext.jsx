"use client";

import { createContext, useContext, useState } from "react";

const ProjectContext = createContext({});

export const ProjectContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  
const fetchDictionaryList = async () => {
  const response = await fetch('https://bildilchin.az:8888/bildilchin/get/dictionaryList', { cache: 'no-store' });
 
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
