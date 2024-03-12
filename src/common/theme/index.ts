import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { BadgeStyle } from "./components/badge";
import { ButtonStyle } from "./components/button";
import { CheckboxStyle } from "./components/checkbox";
import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { MenuStyle } from "./components/menu";
import { Select } from "./components/select";
import { Skeleton } from "./components/skeleton";
import { Text } from "./components/text";
import { Textarea } from "./components/textarea";
import { palette } from "./palette";
import { styles } from "./styles";

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
    Skeleton,
  },
});
