import React, {
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { Team } from "../../models/team/Team";

type ActiveTeamContextValue = {
  activeTeam: Team | undefined;
  setActiveTeam: React.Dispatch<SetStateAction<Team | undefined>>;
};

const ActiveTeamContext = React.createContext<
  ActiveTeamContextValue | undefined
>(undefined);

type ActiveTeamProviderProps = {
  children?: ReactNode;
};

export const ActiveTeamProvider: FC<ActiveTeamProviderProps> = ({
  children,
}) => {
  const [activeTeam, setActiveTeam] = useState<Team | undefined>(undefined);

  return (
    <ActiveTeamContext.Provider value={{ activeTeam, setActiveTeam }}>
      {children}
    </ActiveTeamContext.Provider>
  );
};

export function useActiveTeam() {
  const context = useContext(ActiveTeamContext);
  if (!context)
    throw new Error("useActiveTeam must be used within ActiveTeamProvider");
  return context;
}
