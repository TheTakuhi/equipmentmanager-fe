import { FC } from "react";

import {
  Box,
  List,
  ListIcon,
  ListItem,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Circle } from "react-feather";

import { Item } from "../../models/item/Item";
import { Pageable } from "../../models/utils/Pageable";

interface UserItemsListProps {
  allUserItems?: Pageable<Item>;
}

const UserItemsList: FC<UserItemsListProps> = ({ allUserItems }) => {
  const theme = useTheme();

  if (allUserItems?.totalElements === 0 || allUserItems === undefined)
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
        <Text
          sx={{
            fontSize: theme.components.Text.sizes.body1.fontSize,
            fontStyle: "italic",
            textAlign: "center",
            p: "3.5rem 1rem",
          }}
        >
          No data found
        </Text>
      </Box>
    );

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
