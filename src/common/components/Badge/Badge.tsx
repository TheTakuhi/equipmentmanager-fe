import { FC } from "react";

import { Text, Badge as BadgeOrigin } from "@chakra-ui/react";

interface BadgeProps {
  label: string;
  variant: "info" | "success" | "danger";
}

const Badge: FC<BadgeProps> = ({ label, variant }) => {
  return (
    <BadgeOrigin variant={variant}>
      <Text size="statusLabel">{label}</Text>
    </BadgeOrigin>
  );
};

export default Badge;
