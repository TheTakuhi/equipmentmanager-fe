import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { ButtonStyle } from "./components/button";
import { CheckboxStyle } from "./components/checkbox";
import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { MenuStyle } from "./components/menu";
import { Select } from "./components/select";
import { Text } from "./components/text";
import { Textarea } from "./components/textarea";
import { palette } from "./palette";
import { styles } from "./styles";
import { BadgeStyle } from "../components/Badge/badge";

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
  transition: {
    default: "ease-in 0.15s",
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
    Checkbox: CheckboxStyle,
  },
});
