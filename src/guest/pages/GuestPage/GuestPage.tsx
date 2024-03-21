import { Box, Grid, Text, useTheme } from "@chakra-ui/react";
import { Send } from "react-feather";

import Button from "../../../common/components/Button";
import GuestGif from "../../../common/resources/gandalf.gif";

const GuestPage = () => {
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
            We are sorry, it appears that you do not have access to any
            resources
          </Text>
          <Text
            sx={{
              color: theme.palette.text.primary,
              fontSize: "1.5rem",
              width: "100%",
              pt: "0.25rem",
            }}
          >
            If you wish to change it, use the button bellow to let us know
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
              src={GuestGif}
              alt="guestGif"
            />
          </Box>
          <a href="mailto:appshub@tietoevry.com?subject=MyInternshipRoleRequest">
            <Button
              variant="primary"
              label="Contact us"
              leftIcon={<Send />}
              sx={{ mt: "2rem" }}
            />
          </a>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GuestPage;
