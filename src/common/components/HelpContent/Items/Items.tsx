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

const Items: FC = () => {
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
        Items
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
          Page contains all manager items in a clean form.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          You can simply add a new user or discard item, if it is available.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          You are also able to sort the table data and control their displayed
          quantity using pagination.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Do not forget about the search bar to quickly find the desired item.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Thanks to the action column, you can quickly lend an item, edit it or
          view more information.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Lastly there is a Export button, which is still in development.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.error.main} />
          All of the discarded items are going to be removed 3 months after
          discarding.
        </ListItem>
      </List>
    </Box>
  );
};

export default Items;
