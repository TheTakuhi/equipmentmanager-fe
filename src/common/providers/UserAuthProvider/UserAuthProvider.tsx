import { FC, ReactNode } from "react";

import { toast } from "react-toastify";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import { useKeycloakParsedToken } from "../../security/hooks/queries/useKeycloakParsedToken";
import { toastOptions } from "../../utils/toastOptions";

export const UserAuthProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const {
    isLoading: isLoadingToken,
    isError: isErrorToken,
    data: token,
  } = useKeycloakParsedToken();

  if (isLoadingToken) return <h3>authorizing</h3>;
  if (!token || isErrorToken) {
    toast.error("Server Communication failed, could not fetch user token", {
      ...toastOptions,
      hideProgressBar: true,
    });
    return <h3>Server Communication failed</h3>;
  }

  return (
    <UserAuthContext.Provider value={token}>
      {children}
    </UserAuthContext.Provider>
  );
};
