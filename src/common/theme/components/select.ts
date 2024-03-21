import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = helpers.definePartsStyle(({ theme }) => ({
  field: {
    bg: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: theme.borderRadius.element,
    fontSize: theme.components.Text.sizes.body1.fontSize,
    padding: "0.5rem 2.5rem 0.5rem 1rem",
    cursor: "pointer",
  },
}));

const sortFilter = helpers.definePartsStyle(({ theme }) => ({
  field: {
    h: "auto",
    height: "auto",
    minH: "36px",
    minHeight: "36px",

    background: theme.palette.secondary.header,
    padding: "0.5rem 2.5rem 0.5rem 2.5rem",
    minWidth: "140px",
  },
  icon: {
    color: theme.palette.text.disabled,
  },
}));

// TODO STYLING DOESNT WORK
const paginationSelect = helpers.definePartsStyle(({ theme }) => ({
  field: {
    background: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.light}`,
    width: "4rem",
    padding: "0.5rem 0.5rem",
  },
  icon: {
    color: theme.palette.text.disabled,
  },
}));

export const Select = helpers.defineMultiStyleConfig({
  baseStyle,
  variants: {
    sortFilter,
    paginationSelect,
  },
});
