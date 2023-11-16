import { FC, ReactNode } from "react";

import { Box, Text, useTheme } from "@chakra-ui/react";

interface ItemDetailRowProps {
  label: string;
  text?: string;
  pill?: ReactNode;
}

// TODO connect with getItemByID
const ItemDetailRow: FC<ItemDetailRowProps> = ({ label, text, pill }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "inline-flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "auto",
      }}
    >
      <Text
        sx={{
          color: theme.palette.text.disabled,
          fontSize: theme.components.Text.sizes.body2.fontSize,
          width: "50%",
        }}
      >
        {label}
      </Text>
      {text === undefined ? (
        <Box sx={{ width: "50%" }}>{pill}</Box>
      ) : (
        <Text
          sx={{
            color: theme.palette.text.primary,
            fontSize: theme.components.Text.sizes.body1.fontSize,
            width: "50%",
          }}
        >
          {text}
        </Text>
      )}
    </Box>
  );
};

export default ItemDetailRow;
