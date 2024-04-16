import { FC } from "react";

import {
  Box,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { ChevronRight } from "react-feather";

import InternStellar from "../../../../../public/internstellar2.png";

const About: FC = () => {
  const theme = useTheme();
  return (
    <Box width="100%" height="100%" minWidth="320px" minHeight="251px">
      <Text
        sx={{
          color: theme.palette.text.primary,
          fontSize: "1.25rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        About Equipment manager
      </Text>
      <List
        spacing={2}
        sx={{
          pt: "0.5rem",
          color: theme.palette.text.disabled,
          fontSize: theme.components.Text.sizes.body1.fontSize,
        }}
      >
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Equipment manager is an intern application which helps you manage your
          company´s equipment.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          The application facilitates organized management of loans and items.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Additionally, you can access the loan history of a specific item or
          borrower.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          If you have any questions or need assistance, our dedicated team is
          here to help.
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: "1.25rem",
        }}
      >
        <Box
          sx={{ backgroundColor: "#FFFFFF", width: "225px", height: "85px" }}
        >
          <Img
            src={InternStellar}
            alt="InternStellar"
            sx={{ width: "225px", height: "85px", px: "2rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
