import { defineStyleConfig } from "@chakra-ui/react";

export const BadgeStyle = defineStyleConfig({
  baseStyle: {
    borderRadius: "1rem",
    padding: "0 0.5rem",
  },

  variants: {
    info: ({ theme }) => ({
      bg: theme.palette.info.dark,
      color: theme.palette.info.main,
    }),
    success: ({ theme }) => ({
      bg: theme.palette.success.dark,
      color: theme.palette.success.main,
    }),
    danger: ({ theme }) => ({
      bg: theme.palette.error.dark,
      color: theme.palette.error.main,
    }),
  },
});
