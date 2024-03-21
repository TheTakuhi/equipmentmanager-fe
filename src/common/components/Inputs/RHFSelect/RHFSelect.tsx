import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { Props, Select } from "chakra-react-select";
import { Controller, FieldPath, useFormContext } from "react-hook-form";

import { SelectOption } from "../../../models/utils/SelectOption";

type RHFSelectProps<T extends object> = Props & {
  required?: boolean;
  label: string;
  options: SelectOption[];
  name: FieldPath<T>;
};

const RHFSelect = <T extends object>({
  label,
  required,
  options,
  name,
  ...rest
}: RHFSelectProps<T>) => {
  const theme = useTheme();
  const { control } = useFormContext<T, SelectOption>();
  const isError = options === undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          isRequired={required}
          isInvalid={isError}
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
          <Select
            {...field}
            {...rest}
            options={options}
            useBasicStyles
            chakraStyles={{
              menuList: (provided) => ({
                ...provided,
                width: "100%",
                padding: "0.75rem 0",
                gap: "0.25rem",
              }),
              option: (provided) => ({
                ...provided,
                fontSize: "0.875em",
                margin: 0,
                padding: "0.3rem 1rem",
                _selected: {
                  background: theme.palette.secondary.light,
                },
              }),
            }}
          />
          {isError || !required ? (
            ""
          ) : (
            <FormErrorMessage
              sx={{
                fontSize: theme.components.Text.sizes.body3.fontSize,
                mt: "0.2rem",
              }}
            >
              {label} is required. {error?.message as string}
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};

export default RHFSelect;
