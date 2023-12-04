import { FC } from "react";

import { Box, Text, useTheme } from "@chakra-ui/react";

import { useGetCurrentUser } from "../../../hooks/queries/users/useGetCurrentUser";

export interface CurrentUserProps {
  open: boolean;
}
const CurrentUserName: FC<CurrentUserProps> = ({ open }) => {
  const theme = useTheme();
  const { isError, data } = useGetCurrentUser();
  if (isError) console.error("current user name error");

  return (
    <>
      {data && open ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text
            sx={{
              color: theme.palette.text.primary,
              // animationName: "slide-in",
              // animationDuration: "0.2s",
              // animationDelay: "0.1s",
              // animationFillMode: "forwards",
              size: "sidebar",
              pl: "0.75rem",
              overflow: "hidden",
            }}
          >
            {`${data.firstName}`}
          </Text>
          <Text
            sx={{
              color: theme.palette.text.primary,
              // animationName: "slide-in",
              // animationDuration: "0.2s",
              // animationDelay: "0.1s",
              // animationFillMode: "forwards",
              size: "sidebar",
              pl: "0.75rem",
              overflow: "hidden",
            }}
          >
            {`${data.lastName}`}
          </Text>
        </Box>
      ) : null}
    </>
  );
};

export default CurrentUserName;
