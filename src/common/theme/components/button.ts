import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyle = defineStyleConfig({
  baseStyle: {
    h: "auto",
    height: "auto",
    minH: "36px",
    minHeight: "36px",

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
      bg: theme.palette.secondary.main,
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
      bg: theme.palette.secondary.main,
      color: theme.palette.text.disabled,

      _hover: { cursor: "default" },
      _active: { filter: "none" },
    }),

    pagination: ({ theme }) => ({
      p: "0.25rem 0.5rem",
      borderRadius: "4px",

      transition: "ease-in 0.075s",

      color: theme.palette.text.primary,
      background: theme.palette.background.header,
      border: `2px solid ${theme.palette.secondary.light}`,

      _active: {
        bg: theme.palette.secondary.light,
      },
    }),

    paginationControl: ({ theme }) => ({
      p: "0.25rem 0.25rem",
      borderRadius: "4px",

      transition: "ease-in 0.075s",

      color: theme.palette.text.primary,
      background: theme.palette.background.header,
      border: `2px solid ${theme.palette.secondary.light}`,
      alignItems: "center",
      paddingInlineStart: "0.5rem",
      paddingInlineEnd: "0rem",
      width: "44.22px",
      height: "40px",

      _active: {
        bg: theme.palette.secondary.light,
      },
    }),

    paginationDisabled: ({ theme }) => ({
      p: "0.25rem 0.5rem",
      borderRadius: "4px",

      transition: "ease-in 0.075s",
      color: theme.palette.text.disabled,
      background: theme.palette.background.default,
      border: `2px solid ${theme.palette.secondary.light}`,

      _hover: { cursor: "default" },
      _active: { filter: "none" },
    }),
  },
});
