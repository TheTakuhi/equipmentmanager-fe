import { FC } from "react";

import { Box, Text, useTheme } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { RefreshCw } from "react-feather";
import { toast } from "react-toastify";

import { useActiveRoles } from "../../../providers/ActiveRolesProvider/ActiveRolesProvider";
import keycloak from "../../../security/config/keycloak";
import { clearKeycloakCache } from "../../../security/hooks/useMountKeycloak";
import { inMockedDevEnv } from "../../../utils/environment";
import { toastOptions } from "../../../utils/toastOptions";
import { handleLogoutAction } from "../../CurrentUser/CurrentUserLogout/CurrentUserLogout";

export interface ClearCacheButtonProps {
  open: boolean;
}

const ClearCacheButton: FC<ClearCacheButtonProps> = ({ open }) => {
  const boxWidth = open ? "9.375rem" : "2.75rem";
  const theme = useTheme();
  const navigate = useNavigate();
  const { activeRoles } = useActiveRoles();

  const handleClick = () => {
    if (inMockedDevEnv()) {
      toast.success("Cache cleared", toastOptions);
      localStorage.clear();
    } else {
      handleLogoutAction(navigate, activeRoles[0]);
      keycloak.logout().then(clearKeycloakCache);
      localStorage.clear();
    }
  };

  return (
    <Box
      display="flex"
      onClick={handleClick}
      sx={{
        p: open ? "0.5rem 0.625rem" : "0.5rem 0rem",
        cursor: "pointer",
        width: boxWidth,
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.17)",
          transition: "ease-in 0.15s",
        },
        borderRadius: theme.borderRadius.element,
        animation: open
          ? `border-grow 0.28s ease-in-out forwards`
          : `border-collapse 0.2s ease-in-out backwards`,
        textDecoration: "none",
        justifyContent: open ? "" : "center",
        alignItems: "center",
        gap: "0.625rem",
      }}
      title="Clear cache"
    >
      <RefreshCw color="#FFFFFF" width="1.5rem" height="1.5rem" />
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
          Clear cache
        </Text>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ClearCacheButton;
