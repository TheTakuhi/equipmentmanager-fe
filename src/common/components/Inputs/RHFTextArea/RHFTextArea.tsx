import { FormControl, FormLabel, Textarea, useTheme } from "@chakra-ui/react";
import { Props } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

type RHFTextAreaProps<T extends object> = Props & {
  variant?: string;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  name: FieldPath<T>;
};

const RHFTextArea = <T extends object>({
  variant,
  placeholder,
  label,
  disabled,
  name,
}: RHFTextAreaProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormControl sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel
              sx={{
                fontSize: theme.components.Text.sizes.body2.fontSize,
                mb: "0.4rem",
              }}
            >
              {label}
            </FormLabel>
            <Textarea
              {...field}
              variant={variant}
              placeholder={placeholder}
              disabled={disabled}
              name={name}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default RHFTextArea;
