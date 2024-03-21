import { FC } from "react";

import { Button, ButtonProps, Text } from "@chakra-ui/react";

interface ButtonPropsCustom {
  variant: "pagination" | "paginationControl" | "paginationDisabled";
  label: string;
}

const PaginationButton: FC<ButtonPropsCustom & ButtonProps> = ({
  variant,
  label,
  ...rest
}) => {
  return (
    <Button {...rest} variant={variant}>
      <Text size="buttonLabelPlain">{label}</Text>
    </Button>
  );
};

export default PaginationButton;
