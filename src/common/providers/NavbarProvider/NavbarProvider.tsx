import React, { FC, ReactNode, useContext, useState } from "react";

interface NavbarProviderProps {
  children?: ReactNode;
}

interface NavbarContextValue {
  navbarState: boolean;
  setNavbarState: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarStateContext = React.createContext<NavbarContextValue | undefined>(
  undefined,
);

const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <NavbarStateContext.Provider value={{ navbarState, setNavbarState }}>
      {children}
    </NavbarStateContext.Provider>
  );
};

export function useNavbar() {
  const context = useContext(NavbarStateContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}

export default NavbarProvider;
