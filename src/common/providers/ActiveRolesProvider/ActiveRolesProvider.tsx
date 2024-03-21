import React, { FC, ReactNode, useContext, useEffect, useState } from "react";

import { DefaultRole, Role } from "../../security/model/Role";
import { getMockedUserRole, inMockedDevEnv } from "../../utils/environment";

interface ActiveRolesProviderProps {
  children?: ReactNode;
}

interface ActiveRolesContextValue {
  activeRoles: Role[];
  setActiveRoles: React.Dispatch<React.SetStateAction<Role[]>>;
}

const ActiveRolesStateContext = React.createContext<
  ActiveRolesContextValue | undefined
>(undefined);

const ActiveRolesProvider: FC<ActiveRolesProviderProps> = ({ children }) => {
  const activeRolesData = localStorage.getItem("activeRoles");

  if (inMockedDevEnv()) {
    localStorage.clear();
    localStorage.setItem("activeRoles", JSON.stringify(getMockedUserRole()));
  }

  const initialActiveRoles = activeRolesData
    ? JSON.parse(activeRolesData)
    : [DefaultRole.GUEST];
  const [activeRoles, setActiveRoles] = useState<Role[]>(initialActiveRoles);

  useEffect(() => {
    localStorage.setItem("activeRoles", JSON.stringify(activeRoles));
  }, [activeRoles]);

  return (
    <ActiveRolesStateContext.Provider
      value={{
        activeRoles,
        setActiveRoles,
      }}
    >
      {children}
    </ActiveRolesStateContext.Provider>
  );
};

export function useActiveRoles() {
  const context = useContext(ActiveRolesStateContext);
  if (!context) {
    throw new Error("useActiveRoles must be used within a ActiveRolesProvider");
  }
  return context;
}

export default ActiveRolesProvider;
