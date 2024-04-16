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

const Teams: FC = () => {
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
        Teams
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
          Page contains all manager teams in a clean form.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          You can simply create a new team, invite or remove members from an
          existing team.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Do not forget about the search bar to quickly find the desired loan.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Only team owner is able to edit the team information.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          All manager items are being shared with the people inside the same
          team.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.success.main} />
          Only administrator can edit ownership of the item.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.success.main} />
          Before removing a manager, you must select a new owner (successor) of
          the items.
        </ListItem>
      </List>
    </Box>
  );
};

export default Teams;
