import { Box, useTheme } from "@chakra-ui/react";

const TeamsPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.borderRadius.element,
        color: theme.palette.text.primary,
      }}
    >
      TEAMS PAGE
    </Box>
  );
};

export default TeamsPage;
