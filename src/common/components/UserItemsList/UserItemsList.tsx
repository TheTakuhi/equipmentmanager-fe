import { FC } from "react";

import { Box, List, ListIcon, ListItem, useTheme } from "@chakra-ui/react";
import { Circle } from "react-feather";

import { Item } from "../../models/item/Item";
import { Pageable } from "../../models/utils/Pageable";

interface UserItemsListProps {
  allUserItems?: Pageable<Item>;
}

const UserItemsList: FC<UserItemsListProps> = ({ allUserItems }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        p: "0.5rem 1rem",
        height: "10rem",
        overflowY: "auto",
        borderRadius: "1rem",
      }}
    >
      <List spacing={1}>
        {allUserItems?.content.map((item) => (
          <ListItem
            key={item.serialCode}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListIcon
              as={Circle}
              sx={{
                color: theme.palette.primary.dark,
                fill: theme.palette.primary.dark,
              }}
            />
            {item.serialCode} - {item.type}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserItemsList;
