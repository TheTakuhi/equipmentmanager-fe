import { FC, ReactNode } from "react";

import { Box } from "@chakra-ui/react";

import NavigationBar from "../../components/NavbarBar/NavigationBar";

const NavbarLayout: FC<{ children?: ReactNode }> = ({ children }) => {
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
