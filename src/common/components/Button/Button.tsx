import { FC, ReactElement } from "react";

import { Text, Button as ButtonOrigin } from "@chakra-ui/react";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger" | "disabled";
  label: string;
  startIcon: ReactElement;
}

const Button: FC<ButtonProps> = ({ variant, label, startIcon }) => {
  return (
    <ButtonOrigin variant={variant} leftIcon={startIcon}>
      <Text size="buttonLabel">{label}</Text>
    </ButtonOrigin>
  );
};

export default Button;
