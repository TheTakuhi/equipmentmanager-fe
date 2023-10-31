import { FC } from "react";

import { Box, Divider } from "@chakra-ui/react";

const ConnectionLostPage: FC = () => {
  // TODO implement connection lost page
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        p: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: ({ palette }) => palette.primary.main,
        backgroundColor: "#280071",
      }}
    >
      <Divider
        sx={{
          my: 2,
          width: "2rem",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      />
    </Box>
  );
};

export default ConnectionLostPage;
