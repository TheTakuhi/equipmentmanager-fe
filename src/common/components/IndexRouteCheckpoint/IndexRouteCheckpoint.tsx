import { FC } from "react";

import { Skeleton } from "@chakra-ui/react";
import { Navigate } from "@tanstack/react-router";

import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { useActiveRoles } from "../../providers/ActiveRolesProvider/ActiveRolesProvider";
import { DefaultRole } from "../../security/model/Role";

const IndexRouteCheckpoint: FC = () => {
  const { activeRoles } = useActiveRoles();

  const { isLoading } = useGetUsers();

  if (isLoading) return <Skeleton />;

  return (
    <>
      {activeRoles[0]?.includes(DefaultRole.GUEST) ? (
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
