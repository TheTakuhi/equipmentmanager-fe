import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = helpers.definePartsStyle(({ theme }) => ({
  button: {
    padding: "0.3rem",
    borderRadius: "1rem",

    svg: {
      color: theme.palette.text.disabled,
      width: "1.25rem",
      height: "1.25rem",
    },

    transition: "ease-in 0.05s",
    _hover: {
      bg: theme.palette.secondary.main,
      svg: {
        color: theme.palette.text.primary,
      },
    },

    _focus: {
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    },
  },
  list: {
    zIndex: 2,
    minWidth: "max-content",
    padding: "0.375rem 0",
    display: "inline-flex",
    flexDirection: "column",
    gap: "0.375rem",
    borderRadius: theme.borderRadius.element,
    bg: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.light}`,
  },
  item: {
    padding: "0.375rem 1rem",
    bg: "none",

    svg: {
      width: "1rem",
      height: "1rem",
      stroke: theme.palette.text.disabled,
    },

    transition: "ease-in 0.05s",
    _hover: {
      bg: theme.palette.secondary.light,
    },
  },
}));

export const MenuStyle = helpers.defineMultiStyleConfig({
  baseStyle,
});
