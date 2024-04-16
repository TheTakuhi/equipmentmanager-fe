import { FC } from "react";

import {
  Box,
  List,
  ListIcon,
  ListItem,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { ChevronRight } from "react-feather";

const MyPeople: FC = () => {
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
        My People
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
          Page contains all manager employees in a clean form.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          You can simply remove or add a new user.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          You are also able to sort the table data and control their displayed
          quantity using pagination.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Do not forget about the search bar to quickly find the desired user.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Thanks to the action column, you can quickly lend an item or view user
          detail.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Lastly there is a Export button, which is still in development.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.success.main} />
          All user data are being regularly updated from AD.
        </ListItem>
      </List>
    </Box>
  );
};

export default MyPeople;
