import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { Select } from "./components/select";
import { Text } from "./components/text";
import { Textarea } from "./components/textarea";
import { palette } from "./palette";
import { styles } from "./styles";
import { BadgeStyle } from "../components/Badge/badge";
import { ButtonStyle } from "../components/Button/button";
import { MenuStyle } from "../components/Menu/menu";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,

  ...styles,
  ...palette,
  borderRadius: {
    element: "0.25rem",
  },
  components: {
    Text,
    Heading,
    Button: ButtonStyle,
    Menu: MenuStyle,
    Badge: BadgeStyle,
    Select,
    Input,
    Textarea,
  },
});
