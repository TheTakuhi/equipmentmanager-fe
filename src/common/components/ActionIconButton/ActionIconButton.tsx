import { FC } from "react";

import {
  IconButton as IconButtonOrigin,
  IconButtonProps as IconButtonPropsOrigin,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { Icon as IconType } from "react-feather";

import { theme } from "../../theme";

type ActionIconButtonProps = {
  icon: IconType;
};

export const ActionIconButton: FC<
  ActionIconButtonProps & Omit<IconButtonPropsOrigin, "icon">
> = ({ icon, ...rest }) => {
  return (
    <Tooltip hasArrow label={rest["aria-label"]} openDelay={500}>
      <IconButtonOrigin
        {...rest}
        variant="actionButton"
        icon={<Icon as={icon} color={theme.palette.text.disabled} />}
      />
    </Tooltip>
  );
};
