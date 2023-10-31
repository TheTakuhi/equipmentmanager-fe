import { Box, useTheme } from "@chakra-ui/react";

const ItemsPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.borderRadius.element,
        color: theme.palette.text.primary,
      }}
    >
      ITEMS PAGE
    </Box>
  );
};

export default ItemsPage;
