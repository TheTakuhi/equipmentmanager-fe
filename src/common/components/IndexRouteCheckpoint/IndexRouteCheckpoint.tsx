import { FC } from "react";

import { Navigate } from "@tanstack/react-router";

import { useKeycloakResourceAccess } from "../../security/hooks/queries/useKeycloakResourceAccess";

const IndexRouteCheckpoint: FC = () => {
  const roles = useKeycloakResourceAccess();
  const isGuest = roles && roles['equipment-manager-fe'] && roles['equipment-manager-fe'].roles.includes('GUEST');

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
