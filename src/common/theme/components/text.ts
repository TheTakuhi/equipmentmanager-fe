import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: "Noto Sans, Helvetica, sans-serif",
    fontSize: "0.875em",
  },
  sizes: {
    body1: {
      fontSize: "0.875em",
    },
    body2: {
      fontSize: "0.75em",
    },
    body3: {
      fontSize: "0.625em",
    },
    h1: {
      fontSize: "1.25em",
      fontWeight: "medium",
    },
    h2: {
      fontSize: "1.125em",
      fontWeight: "medium",
    },
    h3: {
      fontSize: "1em",
      fontWeight: "medium",
    },
    buttonLabel: {
      fontSize: "0.875em",
      fontWeight: "semibold",
      letterSpacing: "0.015em",
      lineHeight: "0.875em",
    },
    statusLabel: {
      fontSize: "0.875em",
      fontWeight: "normal",
      textTransform: "lowercase",
      letterSpacing: "0.015em",
    },
    sidebar: {
      fontSize: "0.75em",
      letterSpacing: "2%",
    },
    menuItem: {
      fontSize: "0.875em",
      lineHeight: "0.75em",
    },
  },
});
