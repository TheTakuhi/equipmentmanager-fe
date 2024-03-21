import { queryClient } from "../../config/react-query/reactQuery";

const rootKey = "keycloak";

export const getKeycloakKey = () => [rootKey];

export const clearKeycloakCache = () =>
  queryClient.invalidateQueries({
    predicate: (query) => query.queryKey.includes(rootKey),
  });
