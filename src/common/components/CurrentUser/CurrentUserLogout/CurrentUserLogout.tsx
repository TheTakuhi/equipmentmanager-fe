import { FC } from "react";

import { Box, Text, useTheme } from "@chakra-ui/react";
import { LogoutRounded } from "@mui/icons-material";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

import { clearKeycloakCache } from "../../../security/hooks/useMountKeycloak";
import { inMockedDevEnv } from "../../../utils/environment";
import { toastOptions } from "../../../utils/toastOptions";

export interface CurrentUserProps {
  open: boolean;
}

export const handleLogoutAction = (navigate: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  navigate({
    from: undefined,
    hash: undefined,
    params: undefined,
    replace: false,
    search: {},
    state: undefined,
    to: `${import.meta.env.PUBLIC_URL}/items`,
  });
};

const CurrentUserLogout: FC<CurrentUserProps> = ({ open }) => {
  const boxWidth = open ? "auto" : "2.75rem";
  const theme = useTheme();

  const handleLogout = () => {
    if (inMockedDevEnv()) {
      toast.success("Sign out", toastOptions);
    } else {
      const navigate = useNavigate();
      const { keycloak } = useKeycloak();
      handleLogoutAction(navigate);
      keycloak.logout().then(clearKeycloakCache);
    }
  };

  return (
    <Box
      display="flex"
      onClick={handleLogout}
      sx={{
        p: open ? "0.5rem 0.625rem" : "0.5rem 0rem",
        cursor: "pointer",
        width: boxWidth,
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.17)",
          transition: "ease-in 0.15s",
        },
        borderRadius: theme.borderRadius.element,
        color: "#FFFFFF",
        // animation: open
        //   ? `border-grow 0.28s ease-in-out forwards`
        //   : `border-collapse 0.2s ease-in-out backwards`,
        textDecoration: "none",
        justifyContent: open ? "" : "center",
        alignItems: "center",
        gap: "0.625rem",
      }}
      title="Sign out"
    >
      <LogoutRounded sx={{ color: "#FFFFFF", fontSize: "auto" }} />
      {open ? (
        <Text
          sx={{
            color: theme.palette.text.primary,
            // visibility: "hidden",
            // animationName: "slide-in",
            // animationDuration: "0.2s",
            // animationDelay: "0.1s",
            // animationFillMode: "forwards",
            size: "sidebar",
            whiteSpace: "nowrap",
          }}
        >
          Sign out
        </Text>
      ) : (
        ""
      )}
    </Box>
  );
};

export default CurrentUserLogout;
