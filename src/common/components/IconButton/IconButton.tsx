import { FC } from "react";

import {
  Icon,
  IconButton as IconButtonOrigin,
  IconButtonProps as IconButtonPropsOrigin,
  Tooltip,
} from "@chakra-ui/react";
import { Icon as IconType } from "react-feather";

import { theme } from "../../theme";

type IconButtonProps = {
  icon?: IconType;
};

export const IconButton: FC<
  IconButtonProps & Omit<IconButtonPropsOrigin, "icon">
> = ({ icon, ...rest }) => {
  return (
    <Tooltip hasArrow label={rest["aria-label"]} openDelay={500}>
      <IconButtonOrigin
        {...rest}
        isRound
        icon={<Icon as={icon} color={theme.palette.text.disabled} />}
        size="sm"
        sx={{
          bg: "none",
          minHeight: "32px",
          transition: theme.transition.default,

          _hover: {
            bg: theme.palette.secondary.light,
            svg: { stroke: theme.palette.text.primary },
          },
        }}
      />
    </Tooltip>
  );
};
