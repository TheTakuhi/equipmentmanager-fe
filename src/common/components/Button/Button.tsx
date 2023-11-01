import { FC, ReactElement } from "react";

import { Text, Button as ButtonOrigin, ButtonProps } from "@chakra-ui/react";

interface ButtonPropsCustom {
  variant: "primary" | "secondary" | "danger" | "disabled";
  label: string;
  startIcon?: ReactElement;
}

const Button: FC<ButtonPropsCustom & ButtonProps> = ({
  variant,
  label,
  startIcon,
  ...rest
}) => {
  return (
    <ButtonOrigin {...rest} variant={variant} leftIcon={startIcon}>
      <Text size="buttonLabel">{label}</Text>
    </ButtonOrigin>
  );
};

export default Button;
