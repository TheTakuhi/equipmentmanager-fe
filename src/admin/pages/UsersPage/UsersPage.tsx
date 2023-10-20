import { useCurrentUserQuery } from "../../../common/security/hooks/queries/useCurrentUserQuery";
import { useKeycloakParsedToken } from "../../../common/security/hooks/queries/useKeycloakParsedToken";

const UsersPage = () => {
  const { data: parsedToken } = useKeycloakParsedToken();

  const { data: currentUser } = useCurrentUserQuery();

  return (
    <>
      <h1>UsersPage</h1>
      {JSON.stringify(parsedToken, null, 2)}
      {JSON.stringify(currentUser, null, 2)}
    </>
  );
};

export default UsersPage;
