import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useTheme,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Props } from "chakra-react-select";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";

type RHFInputProps<T extends object> = Props & {
  variant?: string;
  type?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  name: FieldPath<T>;
};

const RHFInput = <T extends object>({
  variant,
  type,
  placeholder,
  label,
  required,
  disabled,
  name,
}: RHFInputProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext<FieldValues, T>();

  const customStyles = css`
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 8px;
    }
  `;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl
            isRequired={required}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <FormLabel
              sx={{
                fontSize: theme.components.Text.sizes.body2.fontSize,
                mb: "0.4rem",
              }}
            >
              {label}
            </FormLabel>
            <Input
              {...field}
              variant={variant}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              css={customStyles}
            />
            <FormHelperText>{error?.message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default RHFInput;
