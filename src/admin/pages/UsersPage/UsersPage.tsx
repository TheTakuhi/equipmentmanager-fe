import { Box, useTheme } from "@chakra-ui/react";

import NavbarLayout from "../../../common/layouts/NavbarLayout";

const UsersPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.borderRadius.element,
      }}
    >
      <NavbarLayout />
    </Box>
  );
};

export default UsersPage;
