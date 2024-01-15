import { FC, ReactNode, useEffect } from "react";

import { Box } from "@chakra-ui/react";

import CheckedRoutes from "../../components/CheckedRoutes/CheckedRoutes";
import NavigationBar from "../../components/NavbarBar/NavigationBar";
import { useActiveRoles } from "../../providers/ActiveRolesProvider/ActiveRolesProvider";
import { DefaultRole, Role } from "../../security/model/Role";

const NavbarLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  const { setActiveRoles } = useActiveRoles();

  const checkedRoutes = CheckedRoutes();
  const localActiveRolesString = localStorage.getItem("activeRoles") ?? "";

  let localActiveRoles: Role[] = [];
  try {
    localActiveRoles = JSON.parse(localActiveRolesString);
  } catch (error) {
    console.error("Error parsing localActiveRoles:", error);
    localActiveRoles = [];
  }

  useEffect(() => {
    if (checkedRoutes.length === 0) {
      setActiveRoles([DefaultRole.GUEST]);
    }
    if (checkedRoutes.length !== 0) {
      setActiveRoles(checkedRoutes);
    }
    if (
      localActiveRoles.length > 1 &&
      localActiveRoles[0] !== DefaultRole.GUEST
    ) {
      setActiveRoles(localActiveRoles);
    }
  }, [checkedRoutes.length === 0]);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default NavbarLayout;
