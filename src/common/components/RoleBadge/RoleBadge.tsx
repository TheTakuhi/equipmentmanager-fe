import { FC } from "react";

import { Badge, SystemStyleObject, Text, useTheme } from "@chakra-ui/react";

interface RoleBadgeProps {
  label: string;
  sx?: SystemStyleObject;
}

const RoleBadge: FC<RoleBadgeProps> = ({ label, sx }) => {
  const theme = useTheme();

  return (
    <Badge
      sx={{
        width: "0.875rem",
        height: "0.875rem",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bg: (t) => t.palette.secondary.light,
        ...sx,
      }}
    >
      <Text
        sx={{
          textTransform: "uppercase",
          fontSize: "0.7em",
          lineHeight: "0.6em",
          color: theme.palette.text.primary,
        }}
      >
        {label.charAt(0)}
      </Text>
    </Badge>
  );
};

export default RoleBadge;
