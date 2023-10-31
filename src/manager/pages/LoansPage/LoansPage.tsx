import { Box, useTheme } from "@chakra-ui/react";

const LoansPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.borderRadius.element,
        color: theme.palette.text.primary,
      }}
    >
      LOANS PAGE
    </Box>
  );
};

export default LoansPage;
