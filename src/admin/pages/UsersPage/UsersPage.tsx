import { Box, Text, useTheme } from "@chakra-ui/react";

import { useGetUser } from "../../../common/hooks/queries/users/useGetUserById";
import { useCurrentUserQuery } from "../../../common/security/hooks/queries/useCurrentUserQuery";
import { useKeycloakParsedToken } from "../../../common/security/hooks/queries/useKeycloakParsedToken";

const UsersPage = () => {
  const theme = useTheme();
  const { data: parsedToken } = useKeycloakParsedToken();

  const { data: currentUser } = useCurrentUserQuery();

  const { data: userById } = useGetUser("123");

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.borderRadius.element,
      }}
    >
      <Text size="h1" variant="white">
        UsersPage
      </Text>
      {JSON.stringify(parsedToken, null, 2)}
      {JSON.stringify(currentUser, null, 2)}
      {JSON.stringify(userById, null, 2)}
    </Box>
  );
};

export default UsersPage;
