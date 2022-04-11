import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page,setPage] = useState({page:'',links:[]}); 


  const openSidebar = () => setIsSidebarOpen(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openSubmenu = (text, coordinates) => {
    const page=sublinks.find(link=>link.page === text)
    setPage(page)
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => setIsSubmenuOpen(false);

  //tip: don't send sets use_state, only send methods to change it.
  //   we should pass an object :
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
