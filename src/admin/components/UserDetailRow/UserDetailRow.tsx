import { FC, ReactNode } from "react";

import { Box, Text, useTheme } from "@chakra-ui/react";

interface UserDetailRowProps {
  label: string;
  text?: string;
  pill?: ReactNode;
}

const UserDetailRow: FC<UserDetailRowProps> = ({ label, text, pill }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "auto",
      }}
    >
      <Text
        sx={{
          color: theme.palette.text.disabled,
          fontSize: theme.components.Text.sizes.body2.fontSize,
          width: "100%",
        }}
      >
        {label}
      </Text>
      {text === undefined ? (
        <Box sx={{ width: "100%" }}>{pill}</Box>
      ) : (
        <Text
          sx={{
            color: theme.palette.text.primary,
            fontSize: theme.components.Text.sizes.body1.fontSize,
            width: "100%",
          }}
        >
          {text}
        </Text>
      )}
    </Box>
  );
};

export default UserDetailRow;