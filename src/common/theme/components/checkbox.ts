import { defineStyleConfig } from "@chakra-ui/react";

export const CheckboxStyle = defineStyleConfig({
  baseStyle: {
    control: {
      padding: 1,
      borderRadius: 4,
      _hover: { borderColor: "#F2F2F2" },
      _checked: {
        color: "#F2F2F2",
        background: "#C6391F",
        borderColor: "#b02c15",
        _hover: {
          background: "#C6391F",
          borderColor: "#b02c15",
        },
      },
    },
  }
});
