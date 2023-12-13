import { FC } from "react";

import { Navigate } from "@tanstack/react-router";

import { useKeycloakResourceAccess } from "../../security/hooks/queries/useKeycloakResourceAccess";

// TODO FIX ts-ignore & eslint-ignore
const IndexRouteCheckpoint: FC = () => {
  const roles = useKeycloakResourceAccess();
  // @ts-ignore
  const isGuest =
    roles &&
    // @ts-ignore
    roles["equipment-manager-fe"] &&
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    roles["equipment-manager-fe"].roles.includes("GUEST");

  return (
    <>
      {isGuest ? (
        <Navigate
          to={`${import.meta.env.VITE_APP_PUBLIC_URL}/guest`}
          params={{}}
          search={{}}
        />
      ) : (
        <Navigate
          to={`${import.meta.env.VITE_APP_PUBLIC_URL}/management/my-people`}
          params={{}}
          search={{}}
        />
      )}
    </>
  );
};

export default IndexRouteCheckpoint;
