import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  palette: {
    primary: {
      main: "#C6391F",
      dark: "#bb331a",
    },
    secondary: {
      light: "#313033", // highlight
      main: "#2C2B2E", // light
      dark: "#282629", // secondary btn bg
      header: "#232224", // table header bg
    },
    info: {
      main: "#99C2CF",
      dark: "#283B52",
    },
    success: {
      main: "#B4CF99",
      dark: "#3D5228",
    },
    error: {
      light: "#734A45",
      main: "#CF9F99",
      dark: "#522D28",
    },
    background: {
      default: "#201F21",
    },
    text: {
      primary: "#F2F2F2",
      disabled: "#7A7A80",
    },
  },
  borderRadius: {
    element: "4px",
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Noto Sans, Helvetica, sans-serif",
        fontSize: "0.875em",
        color: "#F2F2F2",
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
          fontSize: "0.75em",
          fontWeight: "semibold",
          letterSpacing: "2%",
        },
        statusLabel: {
          fontSize: "0.75em",
          letterSpacing: "2%",
        },
        sidebar: {
          fontSize: "0.75em",
          letterSpacing: "2%",
        },
        menuItem: {
          fontSize: "0.75em",
          lineHeight: "0.75em",
        },
      },
      variants: {
        white: {
          color: "#FFFFFF",
        },
      },
    },
  },
});
