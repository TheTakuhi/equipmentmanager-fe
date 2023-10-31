import { Box, Button, Grid } from "@chakra-ui/react";

// TODO implement guest page
const GuestPage = () => {
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
          <Box
            minWidth="5rem"
            minHeight="5rem"
            width="30%"
            sx={{
              pt: "1.5rem",
              ml: "35%",
            }}
          >
            IMAGE
          </Box>
          <a href="mailto:appshub@tietoevry.com?subject=MyInternshipRoleRequest">
            <Button
              sx={{
                width: "5rem",
                height: "3rem",
                fontSize: "1.25rem",
                mt: "1.5rem",
              }}
            />
          </a>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GuestPage;
