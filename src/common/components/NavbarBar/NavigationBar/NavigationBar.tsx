import { FC, useEffect, useRef } from "react";

import { Box, Stack, Text, useTheme } from "@chakra-ui/react";

import packageInfo from "../../../../../package.json";
import { secLinks } from "../../../config/links/securedLinks";
import { useGetCurrentUser } from "../../../hooks/queries/users/useGetCurrentUser";
import { useGetBackendVersion } from "../../../hooks/queries/utility/useGetBackendVersion";
import { useActiveRoles } from "../../../providers/ActiveRolesProvider/ActiveRolesProvider";
import { useNavbar } from "../../../providers/NavbarProvider/NavbarProvider";
import { CustomRole } from "../../../security/model/Role";
import CurrentUserLogout from "../../CurrentUser/CurrentUserLogout";
import CurrentUserName from "../../CurrentUser/CurrentUserUsername";
import UserAvatar from "../../CurrentUser/UserAvatar";
import HelpDialogIconButton from "../HelpDialogIconButton";
import NavbarIconButton from "../NavbarIconButton";
import "./style.scss";

const NavigationBar: FC = () => {
  const theme = useTheme();
  const sidebar = useRef<HTMLDivElement | null>(null);
  const { isLoading: isLoadingUser, data: currentUser } = useGetCurrentUser();
  const { navbarState, setNavbarState } = useNavbar();
  const { data: backendVersion, isLoading } = useGetBackendVersion();

  const { activeRoles } = useActiveRoles();

  const getBackendVersion = () => {
    if (isLoading || !backendVersion) return "unknown";
    return `v${backendVersion}`;
  };
  const getFrontendVersion = () => `v${packageInfo.version}`;

  useEffect(() => {
    setNavbarState(navbarState);
  }, [navbarState, setNavbarState]);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: theme.palette.secondary.header,
        borderRight: "1px solid #313033",
      }}
    >
      <Box
        ref={sidebar}
        sx={{
          display: "flex",
          p: "1.4rem 0.625rem 0.5rem 0.625rem",
          flexDirection: "column",
          width: "4rem",
          transition: "width .3s ease-in-out",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              p: "0.5rem 0.125rem",
              height: "3.625rem",
            }}
            onClick={() =>
              setNavbarState((prev) => {
                // @ts-ignore
                sidebar.current.style.width = !prev ? "170px" : "64px";
                return !prev;
              })
            }
          >
            <UserAvatar
              isLoadingUser={isLoadingUser}
              currentUser={currentUser}
            />
            <CurrentUserName open={navbarState} />
          </Box>
          <Stack
            direction="column"
            sx={{
              gap: "0.75rem",
              p: "0.75rem 0rem",
              borderTop: "1px solid #313033",
              overflow: "hidden",
            }}
          >
            <NavbarIconButton
              link={secLinks.myPeople}
              open={navbarState}
              title="My people"
            />
            <NavbarIconButton
              link={secLinks.items}
              open={navbarState}
              title="Items"
            />
            <NavbarIconButton
              link={secLinks.loans}
              open={navbarState}
              title="Loans"
            />
            <NavbarIconButton
              link={secLinks.teams}
              open={navbarState}
              title="Teams"
            />
            {activeRoles.includes(CustomRole.ADMIN) ? (
              <NavbarIconButton
                link={secLinks.users}
                open={navbarState}
                title="Users"
              />
            ) : (
              " "
            )}
          </Stack>
        </Box>
        <Box>
          <Stack
            direction="column"
            sx={{
              gap: "0.75rem",
              p: navbarState
                ? "0.75rem 0rem 0.063rem 0rem"
                : "0.75rem 0rem 1rem 0rem",
              borderTop: "1px solid #313033",
            }}
          >
            {/* <ClearCacheButton open={navbarState} /> */}
            <HelpDialogIconButton open={navbarState} />
            <CurrentUserLogout open={navbarState} />
          </Stack>
          {navbarState ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "end",
                height: "auto",
                pt: "0.5rem",
              }}
            >
              <Text
                sx={{
                  color: theme.palette.text.disabled,
                  fontSize: "0.625em",
                  whiteSpace: "nowrap",
                }}
              >
                {`${getFrontendVersion()}/${getBackendVersion()}`}
              </Text>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "end",
                height: "auto",
                pt: "0.5rem",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationBar;
