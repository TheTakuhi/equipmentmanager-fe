import { FC } from "react";

import { Box, Text, useTheme } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

import { MainNavigationLink } from "../../../config/links";
import RoleAccessPermission from "../../../security/components/RoleAccessPermission";

interface NavbarIconButtonProps {
  link: MainNavigationLink;
  label?: string;
  open: boolean;
  title: string;
}

const NavbarIconButton: FC<NavbarIconButtonProps> = ({
  link,
  label,
  open,
  title,
}) => {
  const boxWidth = open ? "9.375rem" : "2.75rem";
  const theme = useTheme();
  const Icon = link.icon;

  const isChosen = true;
  const activeProps = isChosen
    ? { style: { backgroundColor: "rgba(255,255,255,0.10)" } }
    : {};
  const inactiveProps = isChosen
    ? {}
    : { style: { backgroundColor: undefined } };

  return (
    <RoleAccessPermission onlyVisibility allowedRoles={link.allowedRoles}>
      <Box
        as={Link}
        from="*"
        to={link.partialPath}
        search={{}}
        activeProps={activeProps}
        inactiveProps={inactiveProps}
        display="flex"
        sx={{
          p: open ? "0.5rem 0.7rem" : "0.5rem 0rem",
          cursor: "pointer",
          width: boxWidth,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.17)",
            transition: "ease-in 0.15s",
          },
          borderRadius: theme.borderRadius.element,
          animation: open
            ? `border-grow 0.3s ease-in-out forwards`
            : `border-collapse-nav 0.3s ease-in-out backwards`,
          textDecoration: "none",
          justifyContent: open ? "" : "center",
          alignItems: "center",
          gap: "0.625rem",
        }}
        title={label || link.label}
      >
        <Icon width="1.375rem" height="1.375rem" />
        {open ? (
          <Text
            sx={{
              color: theme.palette.text.primary,
              visibility: "hidden",
              animationName: "slide-in",
              animationDuration: "0.2s",
              animationDelay: "0.1s",
              animationFillMode: "forwards",
              size: "sidebar",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Text>
        ) : null}
      </Box>
    </RoleAccessPermission>
  );
};

export default NavbarIconButton;
