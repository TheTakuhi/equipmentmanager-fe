import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = helpers.definePartsStyle(({ theme }) => ({
  field: {
    padding: "0.4rem 1rem",
    borderRadius: theme.borderRadius.element,
    border: `1px solid ${theme.palette.secondary.light}`,
    bg: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    fontSize: theme.components.Text.sizes.body1.fontSize,

    _placeholder: {
      color: theme.palette.text.disabled,
    },
    _disabled: {
      color: theme.palette.text.disabled,
    },
  },
  element: {
    color: theme.palette.text.primary,
    _placeholder: {
      color: theme.palette.text.disabled,
    },
    _disabled: {
      color: theme.palette.text.disabled,
    },
  },
}));

export const Input = helpers.defineMultiStyleConfig({
  baseStyle,
});
