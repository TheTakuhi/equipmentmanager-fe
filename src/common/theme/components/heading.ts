import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: "Noto Sans, Helvetica, sans-serif",
    fontSize: "1em",
  },
  sizes: {
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
  },
});
