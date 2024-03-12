import { cssVar, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const startColor = cssVar("skeleton-start-color");
const endColor = cssVar("skeleton-end-color");

const grey = defineStyle({
  _dark: {
    [startColor.variable]: "#222",
    [endColor.variable]: "#444",
  },
});

export const Skeleton = defineStyleConfig({
  variants: {
    grey,
  },

  defaultProps: {
    variant: "grey",
  },
});
