import { Box, useTheme } from "@chakra-ui/react";

const UsersPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.borderRadius.element,
        color: theme.palette.text.primary,
      }}
    >
      USERS PAGE
    </Box>
  );
};

export default UsersPage;
