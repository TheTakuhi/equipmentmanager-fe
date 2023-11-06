import { FC } from "react";

import { FormControl, FormLabel, Textarea, useTheme } from "@chakra-ui/react";

interface RHFTextAreaProps {
  variant?: string;
  placeholder?: string;
  formLabel: string;
  disabled?: boolean;
}

const RHFTextArea: FC<RHFTextAreaProps> = ({
  variant,
  placeholder,
  formLabel,
  disabled,
}) => {
  const theme = useTheme();

  return (
    <FormControl sx={{ display: "flex", flexDirection: "column" }}>
      <FormLabel
        sx={{
          fontSize: theme.components.Text.sizes.body2.fontSize,
          mb: "0.4rem",
        }}
      >
        {formLabel}
      </FormLabel>
      <Textarea
        variant={variant}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormControl>
  );
};

export default RHFTextArea;
