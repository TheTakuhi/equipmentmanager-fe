import { FC } from "react";

import { Box, Grid, Text, useTheme } from "@chakra-ui/react";

import ConnectionGif from "../../../common/resources/no_connection_animation.gif";

const ConnectionLostPage: FC = () => {
  const theme = useTheme();

  return (
    <Grid>
      <Grid>
        <Box
          sx={{
            height: "100%",
            paddingY: "1.5rem",
            textAlign: "center",
          }}
        >
          <Text
            sx={{
              color: theme.palette.text.primary,
              fontSize: "2rem",
              width: "100%",
            }}
          >
            Connection lost
          </Text>
          <Text
            sx={{
              color: theme.palette.text.primary,
              fontSize: "1.5rem",
              width: "100%",
              pt: "0.25rem",
            }}
          >
            Something went wrong, please try again later
          </Text>
          <Box
            minWidth="5rem"
            minHeight="5rem"
            width="50%"
            sx={{
              pt: "2rem",
              ml: "25%",
            }}
          >
            <img
              style={{
                width: "100%",
              }}
              src={ConnectionGif}
              alt="connectionGif"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConnectionLostPage;
