import { FC } from "react";

import { Navigate } from "@tanstack/react-router";

import { useKeycloakResourceAccess } from "../../security/hooks/queries/useKeycloakResourceAccess";
import { CustomRole } from "../../security/model/Role";

const IndexRouteCheckpoint: FC = () => {
  const { data: roles } = useKeycloakResourceAccess();

  return (
    <>
      {roles?.includes(CustomRole.ADMIN) ? (
        <Navigate
          to={`${import.meta.env.VITE_APP_PUBLIC_URL}/management/my-people/`}
          params={{}}
          search={{}}
        />
      ) : roles?.includes(CustomRole.MANAGER) ? (
        <Navigate
          to={`${import.meta.env.VITE_APP_PUBLIC_URL}/management/my-people`}
          params={{}}
          search={{}}
        />
      ) : (
        <Navigate
          to={`${import.meta.env.VITE_APP_PUBLIC_URL}/guest`}
          params={{}}
          search={{}}
        />
      )}
    </>
  );
};

export default IndexRouteCheckpoint;
