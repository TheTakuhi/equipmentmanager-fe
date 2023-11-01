import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyle = defineStyleConfig({
  baseStyle: {
    p: "0.55rem 1rem",
    borderRadius: "4px",
    svg: {
      width: "1.15em",
      height: "1.15em",
    },

    transition: "ease-in 0.075s",
    _active: {
      filter: "brightness(0.85) !important",
    },
  },
  variants: {
    primary: ({ theme }) => ({
      bg: theme.palette.primary.main,

      _hover: {
        bg: theme.palette.primary.dark,
      },
    }),

    secondary: ({ theme }) => ({
      bg: theme.palette.secondary.dark,
      border: `1px solid ${theme.palette.secondary.light}`,

      _hover: {
        filter: "brightness(1.2)",
      },
    }),

    danger: ({ theme }) => ({
      bg: theme.palette.error.dark,
      border: `1px solid ${theme.palette.error.light}`,

      _hover: {
        filter: "brightness(1.15)",
      },
    }),

    disabled: ({ theme }) => ({
      bg: theme.palette.secondary.dark,
      color: theme.palette.text.disabled,

      _hover: { cursor: "default" },
      _active: { filter: "none" },
    }),
  },
});
