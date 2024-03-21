import { defineStyleConfig } from "@chakra-ui/react";

export const Textarea = defineStyleConfig({
  baseStyle: {
    padding: "0.4rem 1rem",
    borderRadius: "0.25rem",
    border: `1px solid #313033`,
    bg: "#282629",
    color: "#F2F2F2",
    fontSize: "0.875em",

    _placeholder: {
      color: "#7A7A80",
    },
    _disabled: {
      color: "#7A7A80",
    },
  },
});
