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

const Loans: FC = () => {
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
        Loans
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
          Page contains all manager loans in a clean form.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          You can simply create a new loan, request the return of a item or
          notify lender.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          You are also able to sort the table data and control their displayed
          quantity using pagination.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Do not forget about the search bar to quickly find the desired loan.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Thanks to the action column, you can quickly access item or user
          detail information.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.info.main} />
          Lastly there is a Export button, which is still in development.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRight} color={theme.palette.success.main} />
          Loans are being sorted by return date on default.
        </ListItem>
      </List>
    </Box>
  );
};

export default Loans;
