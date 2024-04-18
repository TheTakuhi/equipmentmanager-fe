import { FC } from "react";

import { Box, List, ListIcon, ListItem, useTheme } from "@chakra-ui/react";
import { Minus } from "react-feather";

const Help: FC = () => {
  const theme = useTheme();
  return (
    <Box width="100%" height="100%">
      <List
        spacing={2}
        sx={{
          pt: "0.5rem",
          color: theme.palette.text.disabled,
          fontSize: theme.components.Text.sizes.body1.fontSize,
        }}
      >
        <ListItem>
          <ListIcon as={Minus} color={theme.palette.primary.main} />
          Only item&apos;s owner or administrator can change its ownership.
        </ListItem>
        <ListItem>
          <ListIcon as={Minus} color={theme.palette.primary.main} />
          Only team&apos;s owner or administrator can edit the desired team.
        </ListItem>
        <ListItem>
          <ListIcon as={Minus} color={theme.palette.primary.main} />
          Only team&apos;s owner can add or remove members from the team.
        </ListItem>
        <ListItem>
          <ListIcon as={Minus} color={theme.palette.primary.main} />
          All team members share all their items with other members within the
          team.
        </ListItem>
        <ListItem>
          <ListIcon as={Minus} color={theme.palette.primary.main} />
          Any team member can lend any of the available items shared by other
          members of the team.
        </ListItem>
        <ListItem>
          <ListIcon as={Minus} color={theme.palette.primary.main} />
          If you have any questions or need assistance, contact us via e-mail{" "}
          <a
            href="mailto:appshub@tietoevry.com"
            style={{
              textDecoration: "underline",
              color: theme.palette.primary.main,
            }}
          >
            appshub@tietoevry.com
          </a>
          .
        </ListItem>
      </List>
    </Box>
  );
};

export default Help;
